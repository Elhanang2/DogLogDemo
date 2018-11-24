const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // if form data is not empty return input value, else return ""
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    // The name form field for register page must be 2-30 characters
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    // If name field is empty
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    // If email field is empty
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    // If it is not an email
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    // If password field is empty
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    // If password field has less than 6 or more than 30 characters
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    // If confirm password is empty
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    // If confirm password does not match
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
