const express = require("express");
const router = express.Router();
const passport = require("passport");
const profileCtrl = require("../controllers/profiles.js");

router.get("/", profileCtrl.index);

module.exports = router;
