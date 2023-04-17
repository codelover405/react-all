const mongoose = require("mongoose");
const mon = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nested: {
    firstName: { type: String },
    lastName: { type: String },
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// password hash

const User = mongoose.model("User", UserSchema);

module.exports = User;
