export interface GetParams {
	readonly contactId: string;
	readonly popups: string;
}

export const GET_PARAMS: GetParams = {
	contactId: 'cId',
	popups: 'popups',
};
