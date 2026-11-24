import mongoose from "mongoose";
import config from "./user.config.js";

export async function connectDB(){

   await mongoose.connect(config.MONGO_URI);
   console.log("Mongodb connected")

}
export default connectDB;