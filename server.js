const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
var corsOptions = {
    origin: "http://localhost:3000"
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

app.get("/:cid", (req, res) => {
    // courses.aggregate(
    //     [ {"$unwind":"$courses"},
    //       { "$match": {"courses.cid": req.params.cid}},
    //       {"$project": {_id:0, letter:0, dept:0, acc:0}}, 
    //       { "$limit": 1 }
    //     ])
    courses.find({cid:req.params.cid})
       .then(post => res.status(200).json(post))
       .catch(err => res.status(400).json({ id: "Error fetching post by id" }));
});
//returns [ { courses: { cid: 'AERO102', name: 'Space and Society', hours: 3, GMID: 0 } } ]


app.put('/:cid', (req, res, next) => {
    courses.updateOne({cid:req.params.cid}, {GMID:req.query.gmid})
    .then(res = console.log(res))
    .catch(err=>res.status(400).json({ id: "Error fetching post by id" }))

        
  //   Call.update({_id: data.call._id}, { approved: value }, function (error, response) {
  //     console.log(error);
  //     console.log(response);
  //     if (error) {
  //         callback(error, null);
  //     } else {
  //         callback(null, response);
  //     }
  // });
       
});


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});



// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));



