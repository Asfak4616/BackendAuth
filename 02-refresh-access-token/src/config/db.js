import mongoose, { mongo } from "mongoose";

import config from "./config.js";

export async function connectDB() {

    try{
       await mongoose.connect(config.MONGO_URI)
       console.log("Mongodb is connected")
    }
    catch(error){
    console.log("The error is",error)
    }
    
}