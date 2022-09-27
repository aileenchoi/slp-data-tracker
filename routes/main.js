const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const clientsController = require("../controllers/clients");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Client = require("../models/Client");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, clientsController.getProfile); //get individual client profiles
router.get("/clientList", ensureAuth, clientsController.getClientList); //get entire list with all client names
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
