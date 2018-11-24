const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Volunteer = mongoose.model("volunteers");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // Using mongoose to find user by id through the jwt_payload
      Volunteer.findById(jwt_payload.id)
        .then(volunteer => {
          if (volunteer) {
            return done(null, volunteer);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
