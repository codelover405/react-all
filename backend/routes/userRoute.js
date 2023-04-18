const express = require("express");
const cors = require("cors");

const { signUp, logIn } = require("../controllers/userLogic");

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(logIn);

module.exports = router;
