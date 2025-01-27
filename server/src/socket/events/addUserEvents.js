users = require("../../users");

module.exports = (io, socket) => {
  socket.on("add-user", (username) => {
    users.push({ id: socket.id, username: username });
    io.emit("active-users", users);
  });
};
