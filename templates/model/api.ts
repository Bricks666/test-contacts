import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const templateNameApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: (builder) => ({}),
});

export const {} = templateNameApi;
