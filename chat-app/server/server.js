/*
This is the server.js file where the routing for the app will be made
Author: Gabriel Cote
Version: 1.0
*/

//allow us to create routing
const express = require("express");
//allow us to use whitelisting
const cors = require("cors");
const http = require("http");
const app = express();
const server = http.createServer(app);
//HTTP server object
var chat = require('./chat.js');
var socketio = require('socket.io');


/*  cors is a short for cross-origin ressource sharing
    HTTP-header based mechanism that allows a server to 
    indicate any origins (domain, scheme, or port) other 
    than its own from which a browser should permit loading resources
*/
app.use(cors());

//Send a token to the frontEnd when a user login
app.use("/login", (req, res) => {
  res.send({
    token: "thisIsAToken",
  });
  console.log(token);
});

//Test
app.get("/try"),
  (req, res) => {
    res.json("hey");
  };

//
var io = socketio(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);


app.listen(3000, () => console.log("The API is running"));
