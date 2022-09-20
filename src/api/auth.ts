import { API_BASE_URL } from '@/consts/api';
import { User } from '@/models/auth';

export const authApi = async (
	login: string,
	password: string
): Promise<User | undefined> => {
	const response = await fetch(
		`${API_BASE_URL}/users?password=${password}&login=${login}`,
		{
			credentials: 'include',
			mode: 'cors',
		}
	);

	const data = (await response.json()) as User[] | [];
	return data[0];
};
