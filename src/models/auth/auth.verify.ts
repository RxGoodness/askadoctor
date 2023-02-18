import { Schema, Document, model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../config/config';
import { jwt_secret, JWT_TTL } from '../../config';

export interface IAuthOtp {
  email: string;
  otp: string;
  expiration_time: Date;
  verified: boolean;
  created_at: Date;
}

const otpSchema = new Schema<IAuthOtpModel>({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
  },
  otp: { type: String, required: true },
  expiration_time: {
    type: Date,
  },
  verified: { type: Boolean, default: false },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default interface IAuthOtpModel extends Document, IAuthOtp {
  generateOtpToken(): string;
}

otpSchema.methods.generateOtpToken = function () {
  const token = jwt.sign(
    {
      email: this.email,
      otp: this.otp,
      expiration_time: this.expiration_time,
    },
    jwt_secret,
  );
  return token;
};

export const VendorOtp = model<IAuthOtpModel>('VendorOtp', otpSchema);
