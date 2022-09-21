import Joi from 'joi';
import { SEARCH_CONTACT_TYPES } from './data';
import { SearchContact } from './types';

export const searchContactScheme = Joi.object<SearchContact>({
	type: Joi.string().valid(...SEARCH_CONTACT_TYPES),
	value: Joi.string().allow('').optional(),
});
