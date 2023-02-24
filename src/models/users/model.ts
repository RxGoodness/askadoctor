/**
 *
 * Required external Modules
 *
 */

import { Schema, Types, model } from "mongoose";

/**
 *
 * interfaces and enums
 *
 */

export interface IUser {
  firstName?: string;
  lastName?: string;
  designation?: string;
  status?: boolean;
  username?: string
  // country: string;
  // bio?: string;
  // profileImg?: string;
  // banner?: string;
  email: string;
  is_verified: boolean;
  password: string;
  phone_number: string;
  // confirmPassword?: string;
  // comparePassword: (password: string) => Promise<boolean>;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export enum User_Role {
  admin = "admin",
  doctor = "doctor",
  user = "user"
}

export enum User_Status {
  active = "active",
  inactive = "inactive",
}


/**
 *
 * Schemas
 *
 */

const schema = {
  user: new Schema<IUser>(
    {
      phone_number: { type: String, required: false },
      lastName: { type: String, required: false },
      firstName: { type: String, required: false },
      designation: { type: String, required: false },
      status: { type: String, required: true, enum: ["active", "inactive"],
      default: "active" },

      username: { type: String, required: false },
      // bio: { type: String, required: false },
      // country: { type: String, required: true },
      // organization: { type: String, required: true },
      // banner: { type: String, required: false },
      // profileImg: { type: String, required: false },
      email: { type: String, required: true },
      is_verified: { type: Boolean, default: false },
      password: { type: String, required: true },
      // comparePassword: { type: Function, required: true },
      role: {
        type: String,
        enum: ["user", "admin", "doctor"],
        default: "user",
      },
    },
    {
      timestamps: true,
      toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
      toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
  ),
};
schema.user.virtual("chat", {
  ref: "Chat",
  localField: "_id",
  foreignField: "creatorId",
});
/**
 *
 * Models
 *
 */

export const userModel = model("User", schema.user);
