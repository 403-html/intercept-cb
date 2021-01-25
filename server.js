const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const obj = {
  sizes: ["huge", "small"],
  colors: ["yello", "brown"],
  build: {
    back: true,
    front: true,
  },
};

const userLoggedIn = false;

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

app.get("/", (req, res) => {
  if (userLoggedIn) res.sendFile(path.join(__dirname + "/views/loggedIn.html"));
  else res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.post("/login", (req, res) => {
  console.log(req);
});

app.get("/spoons", (req, res) => {
  res.json(obj);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
