import { Request, Response } from "express";
import User from "../models/user.model";
import LoginHistory from "../models/loginHistory.model";

export const getUserProfile = async (req: any, res: Response) => {
	try {
		const id = req.params.id;
		const user = await User.findById(id).select("-password");
		if (!user) return res.status(404).json({ message: "User not found" });
		res.json(user);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const updateUserProfile = async (req: any, res: Response) => {
	try {
		const id = req.params.id;
		const user = await User.findById(id);
		if (!user) return res.status(404).json({ message: "User not found" });

		Object.assign(user, req.body);

		const updatedUser = await user.save();
		res.json(updatedUser);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const deleteUserProfile = async (req: any, res: Response) => {
	try {
		const id = req.params.id;
		const user = await User.findByIdAndDelete(id);
		if (!user) return res.status(404).json({ message: "User not found" });
		res.json(user);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const listUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find().select("-password");
		res.json(users);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const getUserLoginHistory = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const loginHistory = await LoginHistory.find({ userId: id });
		res.json(loginHistory);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};
