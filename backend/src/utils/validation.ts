import Joi from 'joi';

export const registerValidation = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().min(6).required().email(),
    address: Joi.string().optional().allow(''),
    gender: Joi.string().optional().allow(''),
    country: Joi.string().optional().allow(''),
    state: Joi.string().optional().allow(''),
    city: Joi.string().optional().allow(''),
    password: Joi.string().min(8).required(),
    isAdmin: Joi.boolean().optional().allow(''),
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
    name: Joi.string().min(3).optional().allow(''),
    phone: Joi.string().min(10).max(10).optional().allow(''),
    email: Joi.string().min(6).optional().email().allow(''),
    address: Joi.string().optional().allow(''),
    gender: Joi.string().optional().allow(''),
    country: Joi.string().optional().allow(''),
    state: Joi.string().optional().allow(''),
    city: Joi.string().optional().allow(''),
    password: Joi.string().min(6).optional().allow('')
  });
  return schema.validate(data);
};
