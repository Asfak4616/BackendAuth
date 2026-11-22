import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    email:{
        type:String,
        required:true,
       
    },
    passwordHash:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("users",userSchema);
export default userModel;