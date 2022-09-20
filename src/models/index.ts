import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { contactsApi } from './contacts';

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
