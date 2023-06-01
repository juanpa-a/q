import { useState } from "react";
import { QUEUE_URL } from "~/constants";

const connection = new WebSocket(QUEUE_URL);

export const QueueService = () => {
    const [queue, setQueue] = useState([]);
    connection.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("message", message);
        message === null ? setQueue([]) : setQueue(message);
    };
    return { queue };
};
