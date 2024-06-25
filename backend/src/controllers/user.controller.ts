import { Request, Response } from "express";
import { updateValidation } from "../utils/validation";
import {
	getUserProfile as getUserProfileService,
	updateUserProfile as updateUserProfileService,
	deleteUserProfile as deleteUserProfileService,
	listUsers as listUsersService,
	getUserLoginHistory as getUserLoginHistoryService,
} from "../services/user.service";

export const getUserProfile = async (req: any, res: Response) => {
	getUserProfileService(req, res);
};

export const updateUserProfile = async (req: any, res: Response) => {
	const { error } = updateValidation(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });

	updateUserProfileService(req, res);
};

export const deleteUserProfile = async (req: Request, res: Response) => {
	deleteUserProfileService(req, res);
};

export const listUsers = async (req: Request, res: Response) => {
	listUsersService(req, res);
};

export const getUserLoginHistory = async (req: Request, res: Response) => {
	getUserLoginHistoryService(req, res);
};
