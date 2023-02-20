import mongoose, { Document, Model, Schema } from "mongoose";

export interface IIUser {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  profilePicture?: string;
  coverPicture?: string;
  about?: string;
  livesIn?: string;
  worksAt?: string;
  relationship?: string;
  country?: string;
  followers: any[];
  following: any[];
//   followingPosts: any[];
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: Schema = new mongoose.Schema<IIUser & Document>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

export const UserModel: Model<IIUser & Document> = mongoose.model<IIUser & Document>(
  "Users",
  UserSchema
);

// export default UserModel;
