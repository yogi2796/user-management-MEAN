import { Request, Response } from "express";
import { registerValidation, loginValidation } from "../utils/validation";
import {
	register as registerService,
	login as loginService,
} from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });
	registerService(req, res);
};

export const login = async (req: Request, res: Response) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).json({ message: error.details[0].message });
	loginService(req, res);
};
