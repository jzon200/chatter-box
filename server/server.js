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

// const contactsIo = io.of("/contacts");

// contactsIo.on("connection", async (socket) => {
//   const ids = await contactsIo.allSockets();

//   console.log(ids);

//   socket.on("add-contact", (id) => {
//     socket.to(id).emit("contacts", id);
//     // if (room != null) {
//     //   socket.to(room).emit("contact", socket.id, message);
//     // }
//   });asdas
// });

io.on("connection", async (socket) => {
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  const socketId = socket.id;
  console.log("New user connected", `ID: ${socketId}`);

  // socket.join(socketId);

  const ids = await io.allSockets();

  console.log(ids);

  io.emit("users", Array.from(ids));

  socket.on("message", (message, room) => {
    io.to(room).to(socketId).emit("message", socketId, message);
    // io.to(socketId).emit("message", socketId, message);

    // io.emit("message", socket.id, message);

    // contactsIo.emit("message", socket.id, message);
    // contactsIo.emit("message", socket.id, message);
    // console.log(`From Client ${socket.id}:`, message);
  });
});

// io.on("connection", (socket) => {
//   console.log("New user connected", `ID: ${socket.id}`);

//   socket.on("send-message", (message) => {
//     io.emit("message", socket.id, message);
//     console.log(`From Client ${socket.id}:`, message);
//   });
// });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
