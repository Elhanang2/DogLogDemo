const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Volunteer Input Validation
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");

// Importing the Volunteer model
const Volunteer = require("../../models/Volunteer");

// @route     GET api/dogs/test
// @desc      Tests dogs route
// @access    Public

router.get("/test", (req, res) =>
  res.json({
    msg: "volunteers works"
  })
);

// @route     GET api/volunteers/signup
// @desc      Register volunteer
// @access    Public

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  // Check empty input validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Looking for the email record that the volunteer is trying to register with
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

      // Generate a salt, hashing password, and saving new volunteer to database
      bcrypt.genSalt(10, (err, salt) => {
        // Hash the volunteer password from the form
        bcrypt.hash(newVolunteer.password, salt, (err, hash) => {
          if (err) throw err;
          // Volunteer password is hashed
          newVolunteer.password = hash;
          newVolunteer
            // Using mongoose to save password into database
            .save()
            // send volunteer data as json
            .then(volunteer => res.json(volunteer))
            // error handling
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route     POST api/volunteers/login
// @desc      Login volunteers / Return the JWT
// @access    Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check empty input validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Finding if the volunteer email data from form exists in the database
  Volunteer.findOne({ email: email }).then(volunteer => {
    // If volunteer is not found send 404 and not found message
    if (!volunteer) {
      errors.email = "Volunteer not found";
      return res.status(404).json({ errors });
    }

    // Checking if password data from form matches any hashed passwords in database
    bcrypt.compare(password, volunteer.password).then(isMatched => {
      if (isMatched) {
        // Volunteer Matched

        const payload = {
          id: volunteer.id,
          name: volunteer.name
        };

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json({ errors });
      }
    });
  });
});
module.exports = router;
