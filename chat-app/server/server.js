

const express = require("express");
const cors = require("cors");
const app = express();

/*  cors is a short for cross-origin ressource sharing
    HTTP-header based mechanism that allows a server to 
    indicate any origins (domain, scheme, or port) other 
    than its own from which a browser should permit loading resources
*/

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token:'thisIsAToken'
    });
    console.log(token);
});

app.listen(3000, ()=> console.log("The API is running"))



