const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;


// this will be our data base's data structure 
const VolunteerSchema = new Schema(
  {
  
    firstname: {
      type: String,
      trim: true,
      required: "firstname is Required"
    },
    lastname: {
      type: String,
      trim: true,
      required: "lastname is Required"
    },
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer."
      ]
    },
    password_confirm: {type: String,trim: true,
      required: "Password is Required",
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer."
      ]},
    // `email` must be of type String,unique and must match the regex pattern
    

    image: {type:String},
    // `date` must be of type Date. The default value is the current date
    
 
   }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Volunteer", VolunteerSchema);