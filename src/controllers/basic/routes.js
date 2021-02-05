import { Router } from "express";
const basicRouter = Router();

import { sendIndex } from "./logic";

basicRouter.get("/", sendIndex);

export default basicRouter;
