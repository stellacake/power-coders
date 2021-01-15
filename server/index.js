const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  console.log("okay");
  socket.on("join", ({ name, room }, callback) => {
    console.log("ok");
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });

  socket.on("showMagazine", () => {
    io.emit("showMagazine");
  });

  socket.on("hideMagazine", () => {
    io.emit("hideMagazine");
  });

  socket.on("showTV", () => {
    io.emit("showTV");
  });

  socket.on("hideTV", () => {
    io.emit("hideTV");
  });

  socket.on("showNewspaper", () => {
    io.emit("showNewspaper");
  });

  socket.on("hideNewspaper", () => {
    io.emit("hideNewspaper");
  });

  socket.on("showCocktail", () => {
    io.emit("showCocktail");
  });

  socket.on("hideCocktail", () => {
    io.emit("hideCocktail");
  });

  socket.on("setDefinitiveAnswer", () => {
    io.emit("setDefinitiveAnswer");
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
