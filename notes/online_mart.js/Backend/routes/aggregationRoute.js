const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const { aggregateFunction } = require('../controller/aggregateController')

router.get("/", aggregateFunction);








module.exports = router;