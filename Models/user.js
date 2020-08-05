const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
