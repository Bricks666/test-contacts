import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './user';

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});
