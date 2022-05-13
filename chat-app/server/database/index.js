const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gabrielcote1999:Monnewmdp1234!@cluster0.laoyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

/*
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.ROLES = ["user"];
module.exports = db;
*/