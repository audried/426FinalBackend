const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
var corsOptions = {
    origin: "http://localhost:8081"
};  
app.use(cors(corsOptions));
let courses = require("./model");
const router = express.Router();


mongoose.connect("mongodb://127.0.0.1:27017/courses", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.get("/", (req, res) => {
    // res.json(
    //   { message: "426 final backend" }
    // );
    courses.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
});


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});



// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));



