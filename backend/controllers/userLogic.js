const { json } = require("body-parser");
const User = require("../models/userModal");

const signUp = async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "A User already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      console.log(newUser);
      return res.status(200), json({ msg: newUser });
    }
  });
};

module.exports = { signUp };
