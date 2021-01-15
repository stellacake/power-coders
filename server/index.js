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
			user: "Réception",
			text: `${user.name}, bienvenue à ${user.room}.`,
		});
		socket.broadcast.to(user.room).emit("message", {
			user: "Réception",
			text: `${user.name} vous a rejoint !`,
		});

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

 socket.on("clickBistro", () => {
    io.emit("clickBistro");
  });

  socket.on("clickBlini", () => {
    io.emit("clickBlini");
  });

  socket.on("clickHourra", () => {
    io.emit("clickHourra");
  });

  socket.on("clickHouligan", () => {
    io.emit("clickHouligan");
  });

  socket.on("clickSteppe", () => {
    io.emit("clickSteppe");
  });

  socket.on("clickFeria", () => {
    io.emit("clickFeria");
  });

  socket.on("clickRobot", () => {
    io.emit("clickRobot");
  });

  socket.on("clickSlalom", () => {
    io.emit("clickSlalom");
  });

  socket.on("clickKarma", () => {
    io.emit("clickKarma");
  });

  socket.on("clickMoleskine", () => {
    io.emit("clickMoleskine");

});

server.listen(process.env.PORT || 5000, () =>
	console.log(`Server has started.`)
);
