
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const AnimalSchema = new Schema(
  {
   
    id: Number,
    breed: String,
    dogname: String,
    weight: Number,
    sex: String,
    age: Number,
    size: String,
    agelabel: String,
    likes: Number,
    image: String,
    zipcode: Number
    
    // report: [{ type: Schema.Types.ObjectId, ref: "VolunteerReport"}]
    // shelter: { type: Schema.Types.ObjectId, ref: 'Shelter' },
    
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Animal", AnimalSchema);