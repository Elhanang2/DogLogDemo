const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the schema
const RatingSchema = new Schema({
  dog: {
    // Associates the dog by the id
    type: Schema.Types.ObjectId,
    // referencing the dogs collection
    ref: "dogs"
  },
  sit_rating: {
    type: Number,
    required: true
  },
  walk_on_leash_rating: {
    type: Number,
    required: true
  },
  lay_down_rating: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rating = mongoose.model("rating", RatingSchema);
