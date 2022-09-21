export type ContactType = 'phone' | 'vk' | 'site';

export interface Contact {
	readonly id: number;
	readonly userId: number;
	readonly type: ContactType;
	readonly value: string;
}

export interface CreateContact extends Pick<Contact, 'type' | 'value'> {}
export interface CreateContactParams
	extends CreateContact,
		Pick<Contact, 'userId'> {}

export interface EditContact extends Omit<Partial<Contact>, 'id' | 'userId'> {}
export interface EditContactParams extends EditContact, Pick<Contact, 'id'> {}

export interface GetContactsParams {
	readonly type?: ContactType;
	readonly value?: string;
	readonly userId: number;
}
