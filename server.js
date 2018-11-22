const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const volunteers = require("./routes/api/volunteers");
const administrators = require("./routes/api/administrators");

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

// Using the routes
app.use("/api/volunteers", volunteers);
app.use("/api/administrators", administrators);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
