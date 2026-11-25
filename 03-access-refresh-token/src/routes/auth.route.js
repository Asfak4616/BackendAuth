import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateTokens } from "../utils/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      Message: "User already exists",

      errors: [
        {
          path: "email",
          message: "User Already exists",
        },
      ],
    });
  }
  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
});

export default router;
