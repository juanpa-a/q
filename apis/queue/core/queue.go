package core

type Reservation struct {
	ID        string
	Name      string
	PartySize int
}

type Queue struct {
	reservations []Reservation
}

func (q *Queue) Get() []Reservation {
	return q.reservations
}

func (q *Queue) Enqueue(reservation Reservation) {
	q.reservations = append(q.reservations, reservation)
}

func (q *Queue) Dequeue() (Reservation, bool) {
	if len(q.reservations) == 0 {
		return Reservation{}, false
	}

	reservation := q.reservations[0]
	q.reservations = q.reservations[1:]

	return reservation, true
}

func (q *Queue) RemoveByID(id string) bool {
	for i, reservation := range q.reservations {
		if reservation.ID == id {
			q.reservations = append(q.reservations[:i], q.reservations[i+1:]...)
			return true
		}
	}
	return false
}
