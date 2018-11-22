const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the schema
const DogSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 20
  },
  weight: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});

module.exports = Dog = mongoose.model("dog", DogSchema);
