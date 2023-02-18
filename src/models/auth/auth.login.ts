import { Schema, Document, model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { jwt_secret } from '../../config';

export interface IAuthLoginOtp {
  email: string;
  otp: string;
  expiration_time: Date;
  used: boolean;
  created_at: Date;
}

const otpSchema = new Schema<IAuthLoginOtpModel>({
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
  used: { type: Boolean, default: false },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default interface IAuthLoginOtpModel extends Document, IAuthLoginOtp {
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

export const VendorLoginOtp = model<IAuthLoginOtpModel>('AuthLoginOtp', otpSchema);
