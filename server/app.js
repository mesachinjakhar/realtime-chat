const express = require("express");
const http = require("http");
const { initializeSocket } = require("./src/socket");

const app = express();
const PORT = 3001;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
initializeSocket(server);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
