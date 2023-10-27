const express = require("express");
const router = express.Router();
const passport = require("passport");
const tenantCtrl = require("../controllers/tenant.js");

router.get("/", tenantCtrl.new);
