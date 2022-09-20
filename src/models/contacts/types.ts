export type ContactType = 'phone' | 'vk' | 'site';

export interface Contact {
	readonly id: number;
	readonly userId: number;
	readonly type: ContactType;
	readonly value: string;
}

export interface CreateContact extends Omit<Contact, 'id'> {}

export interface UpdateContact
	extends Omit<Partial<Contact>, 'id'>,
		Pick<Contact, 'id'> {}
