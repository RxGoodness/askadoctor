import mongoose, { Document, Model } from "mongoose";

export interface IChats extends Document {
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

export const ChatsModel: Model<IChats> = mongoose.model<IChats>(
  "Chats",
  ChatSchema
);

export interface IMessages extends Document {
  chatId: string;
  senderRole: string;
  recieverRole: string;
  senderId: string;
  recieverId: string;
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
    recieverId: {
      type: String,
    },
    senderRole: {
      type: String,
    },
    recieverRole: {
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

export const MessagesModel: Model<IMessages> = mongoose.model<IMessages>(
  "Messages",
  MessageSchema
);

export interface IPosts extends Document {
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

export const PostsModel: Model<IPosts> = mongoose.model<IPosts>(
  "Postss",
  postSchema
);

// export default ChattingModel;
