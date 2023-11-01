const express = require("express");
const router = express.Router();
const passport = require("passport");
const tenantCtrl = require("../controllers/tenants.js");
const tenant = require("../models/tenant.js");

router.get("/", tenantCtrl.index);
router.get("/new", tenantCtrl.new);
router.post("/new", tenantCtrl.create);
router.put("/:id/update-task/:taskIndex", tenantCtrl.updateTask);

router.get("/:id/edit", tenantCtrl.edit);
router.put("/:id", tenantCtrl.update);
router.get("/:id", tenantCtrl.show);
router.delete("/:id", tenantCtrl.delete);

module.exports = router;
