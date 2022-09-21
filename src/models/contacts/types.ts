export type ContactType = 'phone' | 'vk' | 'site';

export interface Contact {
	readonly id: number;
	readonly userId: number;
	readonly type: ContactType;
	readonly value: string;
}

export interface CreateContact extends Omit<Contact, 'id' | 'userId'> {}
export interface CreateContactParams
	extends CreateContact,
		Pick<Contact, 'userId'> {}

export interface EditContact extends Omit<Partial<Contact>, 'id' | 'userId'> {}
export interface EditContactParams extends EditContact, Pick<Contact, 'id'> {}
