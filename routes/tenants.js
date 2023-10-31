const express = require("express");
const router = express.Router();
const passport = require("passport");
const tenantCtrl = require("../controllers/tenants.js");

router.get("/", tenantCtrl.index);
router.get("/new", tenantCtrl.new);
router.post("/new", tenantCtrl.create);

router.get("/:id", tenantCtrl.show);
// router.put("/:id", tenantCtrl.update);
router.delete("/:id/", tenantCtrl.delete);

module.exports = router;
