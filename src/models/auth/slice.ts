import { authApi } from '@/api/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import { AuthState, AuthThunkParams, SafetyUser } from './types';

const initialState: AuthState = {
	id: -1,
	isAuth: false,
	isAuthorizing: false,
	login: '',
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(authThunk.fulfilled, (state, { payload }) => {
				state.id = payload.id;
				state.login = payload.login;
				state.isAuth = true;
				state.isAuthorizing = false;
				state.error = null;
			})
			.addCase(authThunk.rejected, (state, { error }) => {
				state.error = error.message || 'Что то пошло не так';
				state.isAuthorizing = false;
				state.isAuth = false;
			})
			.addCase(authThunk.pending, (state) => {
				state.isAuthorizing = true;
			});
	},
});

export const authThunk = createAsyncThunk<SafetyUser, AuthThunkParams>(
	'user/auth',
	async ({ login, password }) => {
		const user = await authApi(login, password);
		if (user) {
			return {
				id: user.id,
				login: user.login,
			};
		}

		throw new Error('Пользователя с такими данными не существует');
	}
);

export const getAuthState = (state: AppState) => state.auth;

export const getIsAuthorizing = (state: AppState) =>
	getAuthState(state).isAuthorizing;

export const getAuthError = (state: AppState) => getAuthState(state).error;

export const getAuthId = (state: AppState) => getAuthState(state).id;

export const getIsAuth = (state: AppState) => getAuthState(state).isAuth;
