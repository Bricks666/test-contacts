import Joi from 'joi';
import { AuthThunkParams } from '@/models/auth';

export const loginScheme = Joi.object<AuthThunkParams>({
	login: Joi.string().min(6).required().messages({
		'string.empty': 'Логин должен быть введен',
		'string.min': 'Логин должен содержать не менее 5ти символов',
	}),

	password: Joi.string().min(6).required().messages({
		'string.empty': 'Пароль должен быть введен',
		'string.min': 'Пароль должен содержать не менее 5ти символов',
	}),
});
