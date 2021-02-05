var express = require("express");
var basicRouter = express.Router();

import { sendIndex } from "./logic";

basicRouter.get("/", (req, res) => sendIndex(req, res));

export default basicRouter;
