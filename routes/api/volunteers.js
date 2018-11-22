const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Volunteer Input Validation
const validateSignupInput = require("../../validation/signup");

const Volunteer = require("../../models/Volunteer");

// @route     GET api/volunteers/signup
// @desc      Register volunteer
// @access    Public

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  // Check empty input validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Looking for the email record that the user is trying to register with
  Volunteer.findOne({ email: req.body.email }).then(volunteer => {
    // If the email field matches one in database then
    // return an error message email already exists
    if (volunteer) {
      errors.email = "email already exists";
      return res.status(400).json(errors);
    } else {
      // Form fields for registering
      const newVolunteer = new Volunteer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Generate a salt, hashing password, and saving new user to database
      bcrypt.genSalt(10, (err, salt) => {
        // Hash the user password from the form
        bcrypt.hash(newVolunteer.password, salt, (err, hash) => {
          if (err) throw err;
          // User password is hashed
          newVolunteer.password = hash;
          newVolunteer
            // Using mongoose to save password into database
            .save()
            // send user data as json
            .then(volunteer => res.json(volunteer))
            // error handling
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route     GET api/dogs/test
// @desc      Tests dogs route
// @access    Public

router.get("/test", (req, res) =>
  res.json({
    msg: "volunteers works"
  })
);

module.exports = router;
