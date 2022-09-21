export interface AuthState {
	readonly id: number;
	readonly login: string;
	readonly isAuth: boolean;
	readonly isAuthorizing: boolean;
	readonly error: null | string;
}

export interface LoginThunkParams {
	readonly login: string;
	readonly password: string;
  readonly rememberMe: boolean
}

export interface User {
	readonly id: number;
	readonly login: string;
	readonly password: string;
}

export interface SafetyUser extends Omit<User, 'password'> {}
