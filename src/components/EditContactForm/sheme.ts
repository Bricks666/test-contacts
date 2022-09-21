import { CONTACT_TYPES } from '@/consts/contacts';
import { EditableContact } from '@/models/contacts';
import Joi from 'joi';

export const editContactFormSchema = Joi.object<EditableContact>({
	type: Joi.string()
		.valid(...CONTACT_TYPES)
		.required(),
	value: Joi.string().min(6).required().messages({
		'string.empty': 'Значение контакта должно быть заполнено',
		'string.min': 'Длинна должна быть не меньше 6 символов',
	}),
});
