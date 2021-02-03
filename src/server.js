require("dotenv").config();

// Utils
const faker = require("faker");
const ObjectId = require("mongodb").ObjectId;

// Express
const express = require("express");
const app = express();
const port = process.env.port || 3000;

// Controllers
const basicRouter = require("./controllers/basic/routes");
const commentsRouter = require("./controllers/comments/routes");

//Logic
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.use("/", basicRouter);
app.use("/comments", commentsRouter);
