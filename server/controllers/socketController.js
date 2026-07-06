import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { rooms } from "../store/rooms.js";

export const initSocket = (io) => {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth?.token;

      if (!token) return next(new Error("No token"));

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) return next(new Error("User not found"));

      socket.user = user;
      next();
    } catch (err) {
      next(new Error("Auth failed"));
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id, socket.user.username);

    //  JOIN ROOM
    socket.on("joinRoom", ({ roomId }) => {
      if (!roomId) return;

      const colors = [
        "#e21400","#91580f","#f8a700",
        "#389438","#0067a3","#4e2f8e"
      ];

      if (!rooms[roomId]) {
        rooms[roomId] = { 
          users: {}, 
          code: "",
          language: "javascript" 
        };
      }

      socket.join(roomId);

      rooms[roomId].users[socket.id] = {
        username: socket.user.username,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      socket.roomId = roomId;

      // SEND CURRENT STATE
      socket.emit("codeUpdate", rooms[roomId].code);
      socket.emit("languageChange", {
        language: rooms[roomId].language,
      });

      io.to(roomId).emit(
        "roomUsers",
        Object.values(rooms[roomId].users)
      );
    });

    //  LANGUAGE CHANGE
    socket.on("languageChange", ({ roomId, language }) => {
      if (!rooms[roomId]) return;

      rooms[roomId].language = language;

     
      socket.to(roomId).emit("languageChange", { language });
    });

    //  CHAT
    socket.on("sendMessage", ({ roomId, message }) => {
      const user = rooms[roomId]?.users[socket.id];
      if (!user) return;

      io.to(roomId).emit("receiveMessage", {
        user: user.username,
        text: message,
      });
    });

    //  CODE
    socket.on("codeChange", ({ roomId, code }) => {
      if (!rooms[roomId]) return;

      rooms[roomId].code = code;
      socket.to(roomId).emit("codeUpdate", code);
    });

    //  CURSOR
    socket.on("cursorMove", ({ roomId, position }) => {
      const user = rooms[roomId]?.users[socket.id];
      if (!user) return;

      socket.to(roomId).emit("cursorUpdate", {
        socketId: socket.id,
        position,
        username: user.username,
        color: user.color,
      });
    });


    const leave = () => {
      const roomId = socket.roomId;
      if (!roomId || !rooms[roomId]) return;

      delete rooms[roomId].users[socket.id];

      if (Object.keys(rooms[roomId].users).length === 0) {
        delete rooms[roomId];
      } else {
        io.to(roomId).emit(
          "roomUsers",
          Object.values(rooms[roomId].users)
        );
      }
    };

    socket.on("leaveRoom", leave);
    socket.on("disconnect", () => {
      leave();
      console.log("Disconnected:", socket.id);
    });
  });
};