const express = require("express");
const routers = express.Router();
const notifRouter = require("./notif");

routers.use("/notif", notifRouter);

routers.get("/", (req, res) => {
  res.status(200).json({ Page: "Weclome To API" });
});

module.exports = routers;
