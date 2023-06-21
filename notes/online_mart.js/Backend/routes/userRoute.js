const express = require("express");
const router = express.Router();
const { login, register } = require('../controller/userController')
const auth = require('../middleware/auth')


router.route("/register").post(register);
router.post("/login", login)




module.exports = router;