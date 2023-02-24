import express from "express";
import { Request, Response } from "express";
import controller from "./controller";
import { authorizedUser, verifyAcessToken } from "../../commons";

const router = express.Router();

router.post("/", [verifyAcessToken, controller.createChats]);

router.get("/:userId", controller.userChatss);

router.get("/find/:firstId/:secondId", controller.findChats);

router.post("/add-messages", [verifyAcessToken, controller.addMessagess]);

router.get("/:chatId", controller.getMessagess);

router.get("/:senderId", [verifyAcessToken,authorizedUser("admin", "doctor"), controller.getUserMessages]);

router.get("/", [
  verifyAcessToken,
  authorizedUser("admin", "doctor"),
  controller.getAllMessages,
]);

router.post("/", controller.createPosts);
router.get("/:id", controller.getPosts);
router.put("/:id", controller.updatePosts);
router.delete("/:id", controller.deletePosts);
router.put("/:id/like", controller.likePosts);
// router.get('/:id/timeline', controller.getTimelinePosts);

export { router };
