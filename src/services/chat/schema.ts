import { string, object, literal } from "zod";


export default {
    /**
     *
     * create user
     *
     */
createChat: object({
    recieverId: string({ required_error: "senderId is required" }),
  }).strict(),

  addMessage: object({
    senderId: string({ required_error: "senderId is required" }),
    recieverId: string({ required_error: "recieverId is required" }),
    chatId: string({ required_error: "chatId is required" }),
    text: string({ required_error: "text is required" }),
    

  }).strict(),


}