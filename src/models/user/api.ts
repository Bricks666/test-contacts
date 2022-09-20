import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: (builder) => ({}),
});

export const {} = userApi;
