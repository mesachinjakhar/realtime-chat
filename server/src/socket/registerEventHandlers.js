const messageEvents = require("./events/messageEvents");
const addUserEvents = require("./events/addUserEvents");
const readyToRecieveEvents = require("./events/readyToRecieveEvents");

module.exports.registerEventHandlers = (io, socket) => {
  // Handle client is ready to recieve active user event
  readyToRecieveEvents(io, socket);

  // Handle message event
  messageEvents(io, socket);

  // Handle adding new user
  addUserEvents(io, socket);
};
