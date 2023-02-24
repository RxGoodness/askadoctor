import { string, object, literal } from "zod";

export default {
  /**
   *
   * create user
   *
   */
  createChat: object({
    receiverId: string({ required_error: "receiverId is required" }),
  }).strict(),

  addMessage: object({
    senderId: string({ required_error: "senderId is required" }),
    receiverId: string({ required_error: "receiverId is required" }),
    chatId: string({ required_error: "chatId is required" }),
    text: string({ required_error: "text is required" }),
  }).strict(),
};
