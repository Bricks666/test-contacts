export interface GetParams {
	readonly contactId: string;
	readonly popups: string;
	readonly search: string;
}

export const GET_PARAMS: GetParams = {
	contactId: 'cId',
	popups: 'popups',
	search: 'sq',
};
