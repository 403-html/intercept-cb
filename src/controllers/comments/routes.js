// Utils
import { Router } from "express";
const commentsRouter = Router();

// Controllers
import {
  getComments,
  addComment,
  updateComment,
  removeComment,
  clearAllComments,
} from "./logic";

commentsRouter.get("/", (req, res) => {
  getComments().then((c) => res.send(c));
});

commentsRouter.post("/update", (req, res) => {
  const { id, comment, modDate = new Date() } = req.params;

  updateComment({ id, comment, modDate });
});

commentsRouter.post("/remove", (req, res) => {
  const { id } = req.params;

  removeComment({ id });
});

commentsRouter.post("/add", (req, res) => {
  const { user, comment, addDate } = req.params;

  addComment({ user, comment, addDate });
});

commentsRouter.post("/dropRecords", (req, res) => {
  clearAllComments();
});

export default commentsRouter;
