/*
This is the server.js file where the routing for the app will be made
Author: Gabriel Cote
Version: 1.0
*/
const express = require("express");
const app = express();
//allow us to create routing

//allow us to use whitelisting
const http = require('http').createServer();

//HTTP server object

const io = require('socket.io')(http, {
  cors: { origin: "*"}
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) =>     {
      console.log(message);
      io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
  });
});


/*
//Send a token to the frontEnd when a user login
app.use("/login", (req, res) => {
  res.send({
    token: "thisIsAToken",
  });
  console.log(token);
});
*/
http.listen(8080, () => console.log('listening on http://localhost:8080') );
//app.listen(3000, () => console.log("The API is running"));
