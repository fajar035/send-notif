require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./src/routers/mainRouter");

const server = express();
const logger = morgan(
  ":method : url :status :res[content-length] - :response-time ms"
);

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(logger);
server.use(mainRouter);

server.listen(3000, () => {
  console.log("Server running : ", "http://localhost:3000");
});
