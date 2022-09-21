export const getItem = <T>(key: string): T | null => {
	const data = localStorage.getItem(key);

	return data ? JSON.parse(data) : null;
};

export const setItem = <T>(key: string, value: T): void => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const deleteItem = (key: string): void => {
	localStorage.removeItem(key);
};
