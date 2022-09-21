import { ContactType } from '@/models/contacts';
import { InputHTMLAttributes } from 'react';

export const CONTACT_NAMES: Record<ContactType, string> = {
	phone: 'Телефон',
	site: 'Сайт',
	vk: 'Вконтакте',
};

export const CONTACT_TYPES: ContactType[] = ['phone', 'site', 'vk'];

export const INPUT_CONTACT_TYPE: Record<
	ContactType,
	InputHTMLAttributes<HTMLInputElement>['type']
> = {
	phone: 'tel',
	site: 'url',
	vk: 'url',
};
