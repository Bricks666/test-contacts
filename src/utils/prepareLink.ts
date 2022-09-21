import { Location } from 'react-router-dom';

export interface PrepareLinkParams {
	readonly path?: string;
	readonly query?: Record<string, string | undefined>;
	readonly keepOldQuery?: boolean;
}

const prepareLink = (location: Location, params: PrepareLinkParams): string => {
	const { hash, pathname, search } = location;
	const { path, keepOldQuery = false, query = {} } = params;
	const to = path ?? pathname;

	const newQuery = new URLSearchParams(keepOldQuery ? search : {});
	Object.entries(query).forEach(([key, value]) => {
		if (value) {
			newQuery.set(key, value);
		}
	});
	return `${to}?${newQuery}#${hash}`;
};

export default prepareLink;
