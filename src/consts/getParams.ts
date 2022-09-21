export interface GetParams {
	readonly contactId: string;
	readonly popups: string;
	readonly contactType: string;
	readonly contactValue: string;
}

export const GET_PARAMS: GetParams = {
	contactId: 'cId',
	popups: 'popups',
	contactType: 'cT',
	contactValue: 'cV',
};
