import { io } from "socket.io-client";

const URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

export const socket = io(URL, {
  autoConnect: false, 
  transports: ["websocket"],
  auth: {
    token: localStorage.getItem("token"),
  },
});