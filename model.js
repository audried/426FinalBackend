const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let courses = new Schema({
    
  letter: {
    type: String
  },
  dept: {
    type: String
  },
  courses: {
    type: Array
  }
    
});

module.exports = mongoose.model("courses", courses);