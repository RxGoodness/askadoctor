import express from "express";
import { Request, Response } from "express";
import controller from "./controller";
import middleware from "./middleware";
import { authorizedUser, verifyAcessToken } from "../../commons";

const router = express.Router();

router.post("/", [
  verifyAcessToken,
  middleware.createChat,
  controller.createChat,
]);

router.get("/:userId", controller.userChat);

router.get("/find/:firstId/:secondId", controller.findChat);

router.post("/add-messages", [
  verifyAcessToken,
  middleware.addMessage,
  controller.addMessage,
]);

router.get("/:chatId", controller.getMessage);

router.get("/:senderId", [
  verifyAcessToken,
  authorizedUser("admin", "doctor"),
  controller.getUserMessage,
]);

router.get("/", [
  verifyAcessToken,
  authorizedUser("admin", "doctor"),
  controller.getAllMessage,
]);

router.post("/", controller.createPost);
router.get("/:id", controller.getPost);
router.put("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);
router.put("/:id/like", controller.likePost);

export { router };
