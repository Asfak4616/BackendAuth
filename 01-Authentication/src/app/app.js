import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { authenticate } from "../middleware/auth.middleware.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,name,password
  })
 
  const token = jwt.sign(
    {
     id:user._id
    },
    "4607ed8f8946e0e854523a60701897f4c3e611c5ddfd3ea2dc2d68d48a77197b2019e65a059cebc9eeefafb2",
  );
  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email,
        name,
        id:user._id
      },
      token,
    },
  });
});

app.get("/api/auth/me",authenticate,async(req,res)=>{
 
  console.log(req.user)
  res.status(200).json({
    data:{
      user:req.user
    }
  })
})

export default app;
