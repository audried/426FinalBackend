const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let courses = new Schema({

  cid: {
    type: String
  },
  name: {
    type: String
  },
  gmid: {
    type: Number
  }
    
});

module.exports = mongoose.model("courses", courses);