const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const volunteers = require("./routes/api/volunteers");
const dogs = require("./routes/api/dogs");
const ratings = require("./routes/api/ratings");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connecting to MongoDB
mongoose
  .connect(db)
  // if it connects successfully then
  .then(() => console.log("MongoDB connected"))
  // if it doesn't connect successfully then
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Using the routes
app.use("/api/volunteers", volunteers);
app.use("/api/dogs", dogs);
app.use("/api/ratings", ratings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
