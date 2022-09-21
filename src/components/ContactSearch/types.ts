import { Contact, ContactType } from '@/models/contacts';

export type SearchContactType = ContactType | '';

export interface SearchContact extends Partial<Pick<Contact, 'value'>> {
	readonly type?: SearchContactType;
}
