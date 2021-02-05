require("dotenv").config();

// Utils
import faker from "faker";

// Express
import express from "express";
const app = express();
const port = process.env.port || 3000;

// Controllers
import basicRouter from "./controllers/basic/routes";
import commentsRouter from "./controllers/comments/routes";

//Logic
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.use("/", basicRouter);
app.use("/comments", commentsRouter);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
