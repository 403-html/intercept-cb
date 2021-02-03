const express = require("express");
const basicRouter = express.Router();

const { sendIndex } = require("./logic");

basicRouter.get("/", sendIndex);

module.exports = basicRouter;
