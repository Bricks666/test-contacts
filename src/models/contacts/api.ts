import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/consts/api';
import {
	Contact,
	CreateContactParams,
	EditContactParams,
	GetContactsParams,
} from './types';

const ContactsTag = 'Contacts';

export const contactsApi = createApi({
	reducerPath: 'contacts/api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_BASE_URL}/contacts`,
	}),
	endpoints: (builder) => ({
		getContacts: builder.query<Contact[], GetContactsParams>({
			query: ({ userId, type, value }) => ({
				url: '/',
				params: {
					userId,
					type_like: type,
					value_like: value,
				},
			}),
			providesTags: [ContactsTag],
		}),
		getContact: builder.query<Contact, number>({
			query: (contactId) => ({
				url: `/${contactId}`,
			}),
			providesTags: [ContactsTag],
		}),
		deleteContact: builder.mutation<unknown, number>({
			query: (contactId) => ({
				url: `/${contactId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [ContactsTag],
		}),
		editContact: builder.mutation<unknown, EditContactParams>({
			query: ({ id, ...data }) => ({
				url: `/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: [ContactsTag],
		}),

		createContact: builder.mutation<unknown, CreateContactParams>({
			query: (data) => ({
				url: '/',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: [ContactsTag],
		}),
	}),
	tagTypes: [ContactsTag],
});

export const {
	useGetContactsQuery,
	useGetContactQuery,
	useDeleteContactMutation,
	useCreateContactMutation,
	useEditContactMutation,
} = contactsApi;
