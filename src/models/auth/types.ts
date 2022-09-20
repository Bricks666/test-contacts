export interface AuthState {
	readonly id: number;
	readonly login: string;
	readonly isAuth: boolean;
	readonly isAuthorizing: boolean;
	readonly error: null | string;
}

export interface AuthThunkParams {
	readonly login: string;
	readonly password: string;
}

export interface User {
	readonly id: number;
	readonly login: string;
	readonly password: string;
}

export interface SafetyUser extends Omit<User, 'password'> {}

export interface AuthThunkError {
	readonly error: string;
}
