const express = require("express");
const router = express.Router();
const trackerController = require("../controllers/tracker");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/", ensureAuth, trackerController.getTracker);

module.exports = router;
