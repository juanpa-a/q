package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"

	"github.com/juanpa-a/q/core"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

type Message struct {
	Id        string `json:"id"`
	PartySize int    `json:"partySize"`
	Name      string `json:"name"`
	Action    string `json:"action"`
}

var (
	wsUpgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
	}

	connections sync.Map
)

type ReservationPayload struct {
	Id        string `json:"id"`
	Name      string `json:"name"`
	PartySize int    `json:"partySize"`
}

func SendMessage(queue core.Queue) {
	connections.Range(func(key, value interface{}) bool {
		conn := value.(*websocket.Conn)
		err := conn.WriteJSON(queue.Get())
		if err != nil {
			fmt.Printf("error sending message: %s\n", err.Error())
			// Remove the connection if sending fails
			connections.Delete(key)
		}
		return true
	})
}

func main() {
	router := mux.NewRouter()
	queue := core.Queue{}

	wsEndpoint := func(w http.ResponseWriter, r *http.Request) {
		wsUpgrader.CheckOrigin = func(r *http.Request) bool {
			// Check the http.Request
			// Make sure it's OK to access
			return true
		}

		conn, err := wsUpgrader.Upgrade(w, r, nil)
		if err != nil {
			fmt.Printf("could not upgrade: %s\n", err.Error())
			return
		}

		// Store the connection in the connections map
		connections.Store(conn, conn)

		defer func() {
			// Remove the connection when it's closed
			connections.Delete(conn)
			conn.Close()
		}()

		SendMessage(queue)

		// Event loop
		for {
			var msg Message

			err := conn.ReadJSON(&msg)
			if err != nil {
				fmt.Printf("error reading JSON: %s\n", err.Error())
				break
			}

			// Process the message and send response
			// ...
			switch msg.Action {
			case "ENQUEUE":
				queue.Enqueue(core.Reservation{ID: msg.Id, Name: msg.Name, PartySize: msg.PartySize})
				SendMessage(queue)

			case "DEQUEUE":
				queue.Dequeue()
				SendMessage(queue)

			case "REMOVE_BY_ID":
				queue.RemoveByID(msg.Id)
				SendMessage(queue)
			default:
				continue
			}
		}
	}

	router.HandleFunc("/ws", wsEndpoint)
	log.Fatal(http.ListenAndServe(":8080", router))
}
