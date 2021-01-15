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
  socket.on("join", ({ name, room }, callback) => {
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

  socket.on("showBook", () => {
    io.emit("showBook");
  });

  socket.on("hideBook", () => {
    io.emit("hideBook");
  });

  socket.on("showWindow", () => {
    io.emit("showWindow");
  });

  socket.on("hideWindow", () => {
    io.emit("hideWindow");
  });

  socket.on("showPainting", () => {
    io.emit("showPainting");
  });

  socket.on("hidePainting", () => {
    io.emit("hidePainting");
  });

  socket.on("showMir", () => {
    io.emit("showMir");
  });

  socket.on("hideMir", () => {
    io.emit("hideMir");
  });

  socket.on("showMusicbox", () => {
    io.emit("showMusicbox");
  });

  socket.on("hideMusicbox", () => {
    io.emit("hideMusicbox");
  });

  socket.on("showMagazine", () => {
    io.emit("showMagazine");
  });

  socket.on("hideMagazine", () => {
    io.emit("hideMagazine");
  });

  socket.on("showPhone", () => {
    io.emit("showPhone");
  });

  socket.on("hidePhone", () => {
    io.emit("hidePhone");
  });

  socket.on("showChapka", () => {
    io.emit("showChapka");
  });

  socket.on("hideChapka", () => {
    io.emit("hideChapka");
  });

  socket.on("showTV", () => {
    io.emit("showTV");
  });

  socket.on("hideTV", () => {
    io.emit("hideTV");
  });

  socket.on("showDolls", () => {
    io.emit("showDolls");
  });

  socket.on("hideDolls", () => {
    io.emit("hideDolls");
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

  socket.on("showTea", () => {
    io.emit("showTea");
  });

  socket.on("hideTea", () => {
    io.emit("hideTea");
  });

  socket.on("showBin", () => {
    io.emit("showBin");
  });

  socket.on("hideBin", () => {
    io.emit("hideBin");
  });

  socket.on("showBottle", () => {
    io.emit("showBottle");
  });

  socket.on("hideBottle", () => {
    io.emit("hideBottle");
  });

  socket.on("setDefinitiveAnswer", () => {
    io.emit("setDefinitiveAnswer");
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
