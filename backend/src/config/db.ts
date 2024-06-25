import mongoose from 'mongoose';

export const dbConnection = () => {
    // Database Connection
mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Database connection error:', error);
  });
}