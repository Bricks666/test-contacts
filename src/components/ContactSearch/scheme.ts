import Joi from 'joi';
import { SearchContact } from './types';

export const searchContactScheme = Joi.object<SearchContact>({
	search: Joi.string().allow(''),
});
