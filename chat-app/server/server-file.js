

const express = require("express");
const app = express();
/*  cors is a short for cross-origin ressource sharing
    HTTP-header based mechanism that allows a server to 
    indicate any origins (domain, scheme, or port) other 
    than its own from which a browser should permit loading resources
*/
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//get the driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    //connection to the database when the server start
    dbo.connectToServer(function(err) {
        if (err) console.error(err);
    })
});

console.log('The server is running on the port ${port}')


