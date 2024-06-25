import Joi from 'joi';

export const registerValidation = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().min(6).required().email(),
    address: Joi.string().optional(),
    gender: Joi.string().optional(),
    country: Joi.string().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    password: Joi.string().min(8).required(),
    isAdmin: Joi.boolean().optional(),
  });
  return schema.validate(data);
};

export const loginValidation = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required()
  });
  return schema.validate(data);
};

export const updateValidation = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).optional(),
    phone: Joi.string().min(10).max(10).optional(),
    email: Joi.string().min(6).optional().email(),
    address: Joi.string().optional(),
    gender: Joi.string().optional(),
    country: Joi.string().optional(),
    state: Joi.string().optional(),
    city: Joi.string().optional(),
    password: Joi.string().min(6).optional()
  });
  return schema.validate(data);
};
