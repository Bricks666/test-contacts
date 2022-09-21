import { CONTACT_NAMES, CONTACT_TYPES } from '@/consts/contacts';
import { SearchContactType } from './types';

export const SEARCH_CONTACT_NAMES = {
	...CONTACT_NAMES,
	'': 'Пусто',
};

export const SEARCH_CONTACT_TYPES: SearchContactType[] = [...CONTACT_TYPES, ''];
