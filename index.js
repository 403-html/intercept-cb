import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import usersRouter from "./routers/users.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
