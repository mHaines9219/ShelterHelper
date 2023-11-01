const express = require("express");
const router = express.Router();
const passport = require("passport");
const tenantCtrl = require("../controllers/tenants.js");
const tenant = require("../models/tenant.js");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", tenantCtrl.index);
router.get("/new", ensureLoggedIn, tenantCtrl.new);
router.post("/new", ensureLoggedIn, tenantCtrl.create);
router.put(
  "/:id/update-task/:taskIndex",
  ensureLoggedIn,
  tenantCtrl.updateTask
);

router.get("/:id/edit", ensureLoggedIn, tenantCtrl.edit);
router.put("/:id", ensureLoggedIn, tenantCtrl.update);
router.get("/:id", ensureLoggedIn, tenantCtrl.show);
router.delete("/:id", ensureLoggedIn, tenantCtrl.delete);

module.exports = router;
