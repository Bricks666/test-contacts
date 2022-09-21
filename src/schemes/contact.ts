import Joi from 'joi';
import { CONTACT_TYPES } from '@/consts/contacts';
import { Contact } from '@/models/contacts';

export const contactScheme = Joi.object<Omit<Contact, 'userId' | 'id'>>({
	type: Joi.string()
		.valid(...CONTACT_TYPES)
		.required(),
	value: Joi.string().min(6).required().messages({
		'string.empty': 'Значение контакта должно быть заполнено',
		'string.min': 'Длинна должна быть не меньше 6 символов',
	}),
});
