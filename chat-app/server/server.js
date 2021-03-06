/*
This is the server.js file where the routing for the app will be made
Author: Gabriel Cote
Version: 1.0
*/
const mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
const path = require("path");
app.use(cors()); // add this line
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const chatBackend = require("./chatBackend");
var socketio = require("socket.io");
var http = require("http");
const User = require("./database/user.model");
const { Password } = require("@mui/icons-material");
//Database object
//const db = require("./database");
require("./routes/auth.routes")(app);

mongoose
  .connect(
    "mongodb+srv://gabrielcote1999:Monnewmdp1234!@cluster0.laoyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

//socket object
var server = http.createServer(app);

var io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
chatBackend(io);
console.log(chatBackend);

server.listen(port);

server.on("listening", onListening);
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

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
}

tokens = [];
app.use("/login", (req, res) => {
  console.log("this is res", req.body.userName);
  res.send({
    token: "thisIsAToken",
    id: "1",
  });
});

app.use("/api/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save().then(console.log("userSaved"))
});

app.use("/logout", (req, res) => {
  console.log(req.body);
});

app.use("/sendToken", (req, res) => {
  tokens.push(req.body);
  console.log("this is the tokens", tokens);
});
