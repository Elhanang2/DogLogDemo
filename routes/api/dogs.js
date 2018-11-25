const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Importing the dog Validation
const validateDogInput = require("../../validation/dog");

// Importing the Volunteer model
const Dog = require("../../models/Dog");
// Importing the Volunteer model
const Volunteer = require("../../models/Volunteer");

// @route     GET api/dogs/test
// @desc      Tests dogs route
// @access    Public

router.get("/test", (req, res) =>
  res.json({
    msg: "dogs works"
  })
);

// @route     POST api/dogs
// @desc      Create a dog
// @access    Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDogInput(req.body);

    // Checking Validation
    if (!isValid) {
      // Returning any errors with 400 status
      return res.status(400).json(errors);
    }

    const newDog = new Dog({
      name: req.body.name,
      weight: req.body.weight,
      age: req.body.age,
      sex: req.body.sex,
      location: req.body.location,
      avatar: req.body.avatar
    });

    newDog.save().then(dog => res.json(dog));
  }
);

module.exports = router;
