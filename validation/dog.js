const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDogInput(data) {
  let errors = {};
  // Only validating fields that are required: true in Profile.js
  data.name = !isEmpty(data.name) ? data.name : "";
  data.weight = !isEmpty(data.weight) ? data.weight : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.location = !isEmpty(data.location) ? data.location : "";

  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name needs to be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.weight)) {
    errors.weight = "Weight field is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
