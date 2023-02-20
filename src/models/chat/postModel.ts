import mongoose, { Document, Model } from "mongoose";

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

export const PostModel: Model<IPost> = mongoose.model<IPost>("Posts", postSchema);

// export default PostModel;