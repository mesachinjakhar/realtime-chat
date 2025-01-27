const { Server } = require("socket.io");
const { registerEventHandlers } = require("./registerEventHandlers");
users = require("../users");

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  // Listen for new client connections
  io.on("connection", (socket) => {
    // Register event handlers for this socket
    registerEventHandlers(io, socket);

    // When a client disconnects
    socket.on("disconnect", () => {
      users = users.filter((user) => {
        return user.id != socket.id;
      });
      io.emit("active-users", users);
    });
  });
};

module.exports = { initializeSocket };
