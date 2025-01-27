module.exports = (io, socket) => {
  socket.on("ready-to-receive-active-users", () => {
    // Emit active-users list when the client is ready
    io.emit("active-users", users);
  });
};
