import express from "express";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../controllers/hello.controller.js";
import postMiddleware from "../../../middlewares/post.middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getRequest)
  .post(postMiddleware, postRequest)
  .put(putRequest)
  .delete(deleteRequest);

export default router;
