import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbname: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopolgy: true,
    })

    isConnected = true

    console.log('MongoDB is connected')
  } catch (error) {
    console.log(error)
  }
}