const express = require("express");
const router = express.Router();
const passport = require("passport");
const tenantCtrl = require("../controllers/tenant.js");
const indexRouter = require("../controllers/index.js");

router.get("/", indexRouter.index);
router.get("/new", tenantCtrl.new);

module.exports = router;
