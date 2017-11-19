const express = require("express");
//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
/* Database stuff
mongoose.connect("mongodb://db-server");
let db = mongoose.connection;

db.once('open', function() {
    console.log('\n\n\n\nConnected to MongoDB\n\n\n\n');
});

db.on('error', function(err) {
    console.log("\n\n\nMongo DB connection Error");
    console.log(err);
    console.log("\n\n\n");
});
*/
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

/* moar database stuff
let User = require("./models/user");

let users = require("./routes/user");
app.use("/users", users);

*/

app.get("/", (req, res) => res.send("Hello World!"));

let Trends = require("./trends-api/trends");
app.use("/trends", Trends);

let News = require("./news_api/news");
app.use("/news", News);

let Finance = require("./finance-api/finance");
app.use("/finance", Finance);

app.listen(8080, () => console.log("\n\n\n\nServer listening on port 8080!\n\n\n\n"));
