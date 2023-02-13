const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", async (socket) => {
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  const socketId = socket.id;
  console.log("New user connected", `ID: ${socketId}`);

  // const ids = await io.allSockets();

  // console.log(ids);

  // io.emit("users", Array.from(ids));

  socket.on("login", ({ id, name }) => {
    io.emit("users", { id, name });
  });

  socket.on("send-message", (room, message) => {
    io.to(room).emit("receive-message", socketId, message);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
