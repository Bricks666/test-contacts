import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '@/api/auth';
import { AppState } from '..';
import { AuthState, LoginThunkParams, SafetyUser } from './types';
import { deleteItem, getItem, setItem } from '@/packages/storage';
import { REMEMBER_USER_KEY } from './keys';

const initialState: AuthState = {
	id: -1,
	isAuth: false,
	isAuthorizing: true,
	login: '',
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserInfo(state, { payload }: PayloadAction<SafetyUser>) {
			Object.assign(state, payload);
			state.isAuth = true;
		},
		setAuthorizing(state, { payload }: PayloadAction<boolean>) {
			state.isAuthorizing = payload;
		},
		setError(state, { payload }: PayloadAction<string>) {
			state.error = payload;
			state.isAuth = false;
		},
		reset(state) {
			Object.assign(state, initialState);
			state.isAuthorizing = false;
		},
	},
});

export const { reset, setAuthorizing, setError, setUserInfo } = authSlice.actions;

export const loginThunk = createAsyncThunk<
	SafetyUser | undefined,
	LoginThunkParams
>('user/login', async ({ login, password, rememberMe }, { dispatch }) => {
	try {
		const user = await authApi(login, password);
		if (user) {
			const safetyUser: SafetyUser = {
				id: user.id,
				login: user.login,
			};
			if (rememberMe) {
				setItem(REMEMBER_USER_KEY, safetyUser);
			}
			dispatch(setUserInfo(safetyUser));

			return safetyUser;
		}
		throw new Error();
	} catch {
		dispatch(setError('Пользователя с такими данными не существует'));
	}
});

export const authThunk = createAsyncThunk<SafetyUser | undefined, never>(
	'user/auth',
	(_, { dispatch }) => {
		dispatch(setAuthorizing(true));
		const user: SafetyUser | null = getItem(REMEMBER_USER_KEY);
		if (user) {
			dispatch(setUserInfo(user));
		}

		dispatch(setAuthorizing(false));

		return user || undefined;
	}
);

export const logoutThunk = createAsyncThunk<void, never>(
	'user/auth',
	(_, { dispatch }) => {
		deleteItem(REMEMBER_USER_KEY);
		dispatch(reset());
	}
);

export const getAuthState = (state: AppState) => state.auth;

export const getIsAuthorizing = (state: AppState) =>
	getAuthState(state).isAuthorizing;

export const getAuthError = (state: AppState) => getAuthState(state).error;

export const getAuthId = (state: AppState) => getAuthState(state).id;

export const getIsAuth = (state: AppState) => getAuthState(state).isAuth;
