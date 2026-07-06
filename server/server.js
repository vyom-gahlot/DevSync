import express from "express";
import "dotenv/config";
import cors from "cors";
import { Server } from "socket.io";
import dns from "dns";
import connectDB from "./configs/db.js";
import signRouter from "./routes/signRoutes.js";
import http from "http";
import roomRouter from "./routes/roomRoutes.js";
import { rooms } from "./store/rooms.js";
import { initSocket } from "./controllers/socketController.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL, 
    methods: ["GET", "POST"],
  },
});



await connectDB();

initSocket(io);



// MIDDLEWARES
app.use(cors());
app.use(express.json());

//  ROUTES
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/auth", signRouter);
app.use("/api/room", roomRouter);


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});