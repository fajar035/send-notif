const express = require("express");
const notifRouter = express.Router();
const notifController = require("../controllers/notif");

notifRouter.post("/", notifController.sendNotification);

module.exports = notifRouter;
