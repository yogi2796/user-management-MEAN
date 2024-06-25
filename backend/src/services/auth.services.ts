import { Request, Response } from "express";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import LoginHistory from "../models/loginHistory.model";

export const register = async (req: Request, res: Response) => {
  try {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(400).json({ message: "Email already exists" });
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({ message: "Email or password is wrong" });

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).json({ message: "Email or password is wrong" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!);
    res.header("Authorization", token).json({ token });

    const loginHistory = new LoginHistory({
      userId: user._id,
      ipAddress: req.ip,
    });
    await loginHistory.save();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
