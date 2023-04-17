var jwt = require("jsonwebtoken");
const Jwt_Secret = "YUWDSJHSJDH787IKKJK";

const jwtToken = ({ id }) => {
  return jwt.sign({ id }, Jwt_Secret, {
    expiresIn: "30d",
  });
};

module.exports = { jwtToken };
