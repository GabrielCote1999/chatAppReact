/*
This is the server.js file where the routing for the app will be made
Author: Gabriel Cote
Version: 1.0
*/
const chatBackend = require('./chatBackend');
var socketio = require('socket.io');
var http = require("http");
var express = require("express");
var app = express();

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


//socket object
var server = http.createServer(app);

var io = socketio(server,{

  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chatBackend(io);
console.log(chatBackend);
var cors = require('cors');




app.use(cors()); // add this line


server.listen(port);

server.on('listening', onListening);
/*
//Send a token to the frontEnd when a user login
app.use("/login", (req, res) => {
  res.send({
    token: "thisIsAToken",
  });
  console.log(token);
});
*/
//http.listen(8080, () => console.log("listening on http://localhost:8080"));
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}