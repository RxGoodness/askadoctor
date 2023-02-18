import { Schema, Document, model, ObjectId } from 'mongoose';

export interface IToken {
  user_id: ObjectId;
  token: string;
  created_at: Date;
}

export default interface ITokenModel extends Document, IToken {}

const schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Vendor',
  },
  token: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

export const Token = model<ITokenModel>('Token', schema);
