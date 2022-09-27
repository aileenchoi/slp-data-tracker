const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const clientsController = require("../controllers/clients");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.get("/:id", ensureAuth, clientsController.getClient);

router.get("/clients", ensureAuth, clientsController.getClients);

router.post("/addClient", ensureAuth, clientsController.addClient)

router.delete("/deleteClient/:id", clientsController.deleteClient);

module.exports = router;
