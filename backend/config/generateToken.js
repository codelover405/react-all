const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRETs = "GHHGHGHGYTYTYTYTYY78JHJHJH";

const generateToken = (id) => {
  //   return jwt.sign({ id }, process.env.JWT_SECRET, {
  return jwt.sign({ id }, JWT_SECRETs, {
    expiresIn: "30d",
  });
};

module.exports = { generateToken };
