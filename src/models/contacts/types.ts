export interface Contact {
	readonly id: number;
	readonly userId: number;
	readonly name: string;
	readonly value: string;
}

export interface CreateContact extends Omit<Contact, 'id' | 'userId'> {}
export interface CreateContactParams
	extends CreateContact,
		Pick<Contact, 'userId'> {}

export interface EditContact extends Omit<Partial<Contact>, 'id' | 'userId'> {}
export interface EditContactParams extends EditContact, Pick<Contact, 'id'> {}

export interface GetContactsParams {
	readonly userId: number;
	readonly search?: string;
}
