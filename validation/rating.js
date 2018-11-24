const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRatingInput(data) {
  let errors = {};
  // Only validating fields that are required: true in Profile.js
  data.sit_rating = !isEmpty(data.sit_rating) ? data.sit_rating : "";
  data.walk_on_leash_rating = !isEmpty(data.walk_on_leash_rating)
    ? data.walk_on_leash_rating
    : "";
  data.lay_down_rating = !isEmpty(data.lay_down_rating)
    ? data.lay_down_rating
    : "";

  if (Validator.isEmpty(data.sit_rating)) {
    errors.sit_rating = "Sit rating field is required";
  }

  if (Validator.isEmpty(data.walk_on_leash_rating)) {
    errors.walk_on_leash_rating = "Walk on leash rating field is required";
  }

  if (Validator.isEmpty(data.lay_down_rating)) {
    errors.lay_down_rating = "Law down rating field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
