const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);
//Socket.io imports
const { Server } = require("socket.io");
//HTTP server object
const io = new Server(server);

/*  cors is a short for cross-origin ressource sharing
    HTTP-header based mechanism that allows a server to 
    indicate any origins (domain, scheme, or port) other 
    than its own from which a browser should permit loading resources
*/

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "thisIsAToken",
  });
  console.log(token);
});

app.get("/try"),
  (req, res) => {
    res.json("hey");
  };

//listening for a connection event
app.use("/chat"),
  (req, res) => {
      console.log('in /chat')
    io.on("connection", (socket) => {
      console.log("a user connected");
    });
  };

app.listen(3000, () => console.log("The API is running"));
