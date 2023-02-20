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

export const ChatModel: Model<IChat> = mongoose.model<IChat>("Chat", ChatSchema);

// export ChatModel;

