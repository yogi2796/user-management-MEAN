import { ObjectId } from 'mongodb';
import { Schema, model, Document } from 'mongoose';

interface ILoginHistory extends Document {
  userId: ObjectId;
  loginAt: Date;
  ipAddress: string;
}

const loginHistorySchema = new Schema<ILoginHistory>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  loginAt: { type: Date, default: Date.now },
  ipAddress: { type: String, required: true }
});

const LoginHistory = model<ILoginHistory>('LoginHistory', loginHistorySchema);
export default LoginHistory;
