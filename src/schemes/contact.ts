import Joi from 'joi';
import { Contact } from '@/models/contacts';
import { CONTACT_VALUE_PATTERN } from '@/consts/contact';

export const contactScheme = Joi.object<Omit<Contact, 'userId' | 'id'>>({
	name: Joi.string().min(2).required().messages({
		'string.empty': 'Имя контакта не должно быть пустым',
		'string.min': 'Имя должно содержать минимум 2 символа',
	}),
	value: Joi.string()
		.min(6)
		.pattern(CONTACT_VALUE_PATTERN)
		.required()
		.messages({
			'string.empty': 'Значение контакта должно быть заполнено',
			'string.min': 'Длинна должна быть не меньше 6 символов',
			'string.pattern.base':
				'Значение контакта должно быть номером телефона или ссылкой. Номер начинается с +',
		}),
});
