import { Types } from "mongoose";

export class Message {
    senderId?: Types.ObjectId | undefined;
    receiverId?: string;
    content: string;
    timestamp: Date;
  
    constructor(senderId: Types.ObjectId | undefined, receiverId: string, content: string, timestamp?: Date) {
      this.senderId = senderId;
      this.receiverId = receiverId;
      this.content = content;
      this.timestamp = timestamp || new Date();
    }
  }
  