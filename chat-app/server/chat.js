//User identifier
const uuidv4 = require("uuid").v4;

/*----- Messages and users are the two GLOBAL variables -----*/
//contain all the messages
const messages = new Set();
//hold user informations indexed by the socket connnection
const users = new Map();

/*creation of a defaulUser*/
const defaultUser = {
  id: "anon",
  name: "Anonymous",
};

const messageExpirationTimeMS = 5 * 60 * 1000;

class Connection {
  constructor(io, socket) {
    //socket and io objects
    this.socket = socket;
    this.io = io;
    //events
    socket.on("getMessages", () => this.getMessages());
    socket.on("message", (value) => this.handleMessage(value));
    socket.on("disconnect", () => this.disconnect());
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }

  sendMessage(message) {
    this.io.sockets.emit("message", message);
  }

  getMessages() {
    messages.forEach((message) => this.sendMessage(message));
  }

  handleMessage(value) {
    const message = {
      id: uuidv4(),
      user: users.get(this.socket) || defaultUser,
      value,
      time: Date.now(),
    };
    //add the message to the set of messages
    messages.add(message);
    //uses the Socket.IO server to send the message to all sockets that are currently connected
    this.sendMessage(message);
    setTimeout(() => {
      messages.delete(message);
      this.io.sockets.emit("deleteMessage", message.id);
    }, messageExpirationTimeMS);
  }
  disconnect() {
    users.delete(this.socket);
  }
}

function chat(io) {
  io.on("connection", (socket) => {
    new Connection(io, socket);
  });
}

module.exports = chat;
