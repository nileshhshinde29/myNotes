const express = require("express");
const router = express.Router();
const { login, registerSchool, self } = require('../controller/userController')
const auth = require('../middleware/auth')


router.route("/register").post(registerSchool);
router.post("/login", login)
router.get('/self', auth, self)




module.exports = router;