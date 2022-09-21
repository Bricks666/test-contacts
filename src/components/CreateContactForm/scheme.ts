import Joi from 'joi';
import { CONTACT_TYPES } from '@/consts/contacts';
import { CreateContact } from '@/models/contacts';

export const createContactFormScheme = Joi.object<CreateContact>({
	type: Joi.string()
		.valid(...CONTACT_TYPES)
		.required(),
	value: Joi.string().min(6).required().messages({
		'string.empty': 'Значение контакта должно быть заполнено',
		'string.min': 'Длинна должна быть не меньше 6 символов',
	}),
});
