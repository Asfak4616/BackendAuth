import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDb() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is undefined in environment variables!");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
}

