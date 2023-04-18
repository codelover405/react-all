const asyncHandler = require("express-async-handler");
const { json } = require("body-parser");
const User = require("../models/userModal");
const { generateToken } = require("../config/generateToken");
// const bcrypt = require("bcrypt");
var cors = require("cors");

// const signUp = asyncHandler(async (req, res) => {
//   User.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       return res.status(400).json({ email: "A User already exists" });
//     } else {
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         // token: generateToken(req.body._id),
//       });
//       newUser.save();
//       console.log(newUser);
//       return res.status(200), json({ msg: newUser });
//     }
//   });
// });

// const signUp = (req, res, next) => {
//   // Check if user already exists
//   User.findOne({ email: req.body.email })
//     .exec()
//     .then((user) => {
//       if (user) {
//         return res.status(409).json({
//           message: "Email already exists",
//         });
//       } else {
//         // Hash the password before saving to the database
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           if (err) {
//             return res.status(500).json({
//               error: "not password hash failed",
//             });
//           } else {
//             // Create a new user object
//             const user = new User({
//               username: req.body.name,
//               email: req.body.email,
//               password: hash,
//             });

//             // Save the user object to the database
//             user
//               .save()
//               .then((result) => {
//                 // Generate a JWT token for the user
//                 const token = jwt.sign(
//                   {
//                     email: user.email,
//                     userId: user._id,
//                   },
//                   // process.env.JWT_SECRET,
//                   JWT_SECRET,
//                   {
//                     expiresIn: "1h",
//                   }
//                 );

//                 res.status(201).json({
//                   message: "User created successfully",
//                   token: token,
//                 });
//               })
//               .catch((err) => {
//                 res.status(500).json({
//                   message: "not create User",
//                 });
//               });
//           }
//         });
//       }
//     });
// };

// ************** signUp *****************
const signUp = asyncHandler(async (req, res) => {
  // user Empty
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
    res.status(400);
    throw new Error("Place Enter all the Faild");
  }

  // already user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // create user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Filed to Create new User");
  }
});

// *********** login ****************8
const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // data base find email
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // password:user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw Error("Invalid Email or Password");
  }
});

module.exports = { signUp, logIn };
