import { Request, Response } from "express";
import User from "../models/user.model";
import LoginHistory from "../models/loginHistory.model";
import mongoose from "mongoose";

export const getUserProfile = async (req: any, res: Response) => {
	try {
		const id = req.user._id;
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

export const getUserLoginHistory = async (req: any, res: Response) => {
	try {
		const id = req.user?._id;
		const loginHistory = await LoginHistory.aggregate([
			{
				$match: { userId: new mongoose.Types.ObjectId(id) },
			},
			{
				$lookup: {
					from: 'users',
					localField: 'userId',
					foreignField: '_id',
					as: 'userId'
				}
			},
			{
				$project: {
					_id: 1,
					ipAddress: 1,
					userId: {
						_id: 1,
						name: 1,
						email: 1,
						phone: 1 
					},
					loginAt: 1
				}
			}
		]);
		res.json(loginHistory);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};
