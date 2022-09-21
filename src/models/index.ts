import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authSlice } from './auth';
import { contactsApi } from './contacts';

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(contactsApi.middleware);
	},
	devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
