import mongoose, { Document, Model } from "mongoose";

export interface IMessage extends Document {
chatId: string;
senderId: string;
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
text: {
type: String,
},
},
{
timestamps: true,
}
);

export const MessageModel: Model<IMessage> = mongoose.model<IMessage>("Message", MessageSchema);

// export default MessageModel;

