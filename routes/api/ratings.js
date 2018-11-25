const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Importing the dog Validation
const validateDogInput = require("../../validation/dog");
// Importing the rating Validation
const validateRatingInput = require("../../validation/rating");

// Importing the Volunteer model
const Dog = require("../../models/Dog");
// Importing the Volunteer model
const Volunteer = require("../../models/Volunteer");
// Importing the Rating model
const Rating = require("../../models/Rating");

// @route     GET api/ratings/test
// @desc      Tests ratings route
// @access    Public

router.get("/test", (req, res) =>
  res.json({
    msg: "ratings works"
  })
);

module.exports = router;
