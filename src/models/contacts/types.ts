export type ContactType = 'phone' | 'vk' | 'site';

export interface Contact {
	readonly id: number;
	readonly userId: number;
	readonly type: ContactType;
	readonly value: string;
}

export interface CreateContact extends Omit<Contact, 'id'> {}

export interface EditableContact
	extends Omit<Partial<Contact>, 'id' | 'userId'> {}

export interface EditContact extends EditableContact, Pick<Contact, 'id'> {}
