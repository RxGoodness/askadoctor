// import { Types } from "mongoose";

// export class Message {
//     senderId?: Types.ObjectId | undefined;
//     receiverId?: string;
//     content: string;
//     timestamp: Date;
  
//     constructor(senderId: Types.ObjectId | undefined, receiverId: string, content: string, timestamp?: Date) {
//       this.senderId = senderId;
//       this.receiverId = receiverId;
//       this.content = content;
//       this.timestamp = timestamp || new Date();
//     }
//   }
  

import { Schema, Document, model } from 'mongoose';
import { IUser } from '../users';
// import { ObjectId } from 'mongoose';

// export interface IMessage extends Document {
//   content: string;
//   senderId: 
// //   new ObjectId();
//    IUser['_id'] | undefined;
//   receiverId:  
// //   new ObjectId();
//   IUser['_id'];
//   timestamp: Date;
// }

export interface IMessage {
    content: string,
    senderId: 
    // new ObjectId(),
    IUser['_id'] | undefined,
    receiverId: 
    IUser['_id'] | undefined,
    // new ObjectId(),
    timestamp: Date,
  };
  


const messageSchema = new Schema<IMessage>({
  content: { type: String, required: true },
  senderId: { type: Schema.Types.ObjectId, ref: 'User' },
  receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, required: true },
});

export const Message = model<IMessage>('Message', messageSchema);
