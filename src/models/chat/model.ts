import mongoose, { Document, Model } from "mongoose";

export interface IChat extends Document {
  members: any[];
}

const ChatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const chatModel: Model<IChat> = mongoose.model<IChat>(
  "Chats",
  ChatSchema
);

export interface IMessage extends Document {
  chatId: string;
  senderRole: string;
  receiverRole: string;
  senderId: string;
  receiverId: string;
  text: string;
}

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
    senderRole: {
      type: String,
    },
    receiverRole: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const messageModel: Model<IMessage> = mongoose.model<IMessage>(
  "Message",
  MessageSchema
);

export interface IPost extends Document {
  userId: string;
  desc: string;
  likes: any[];
  createdAt: Date;
  image: string;
}

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

export const postModel: Model<IPost> = mongoose.model<IPost>(
  "Post",
  postSchema
);
