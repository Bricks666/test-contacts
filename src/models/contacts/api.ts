import { API_BASE_URL } from '@/consts/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact, CreateContact, UpdateContact } from './types';

const ContactsTag = 'Contacts';

export const contactsApi = createApi({
	reducerPath: 'contacts/api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_BASE_URL}/contacts`,
	}),
	endpoints: (builder) => ({
		getContacts: builder.query<Contact[], number>({
			query: (userId) => ({
				url: '/',
				params: {
					userId,
				},
			}),
			providesTags: [ContactsTag],
		}),
		deleteContact: builder.mutation<unknown, number>({
			query: (contactId) => ({
				url: `/${contactId}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: ContactsTag }],
		}),
		updateContact: builder.mutation<unknown, UpdateContact>({
			query: ({ id, ...data }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: [{ type: ContactsTag }],
		}),

		createContact: builder.mutation<unknown, CreateContact>({
			query: (data) => ({
				url: '/',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: [{ type: ContactsTag }],
		}),
	}),
	tagTypes: [ContactsTag],
});

export const {
	useGetContactsQuery,
	useDeleteContactMutation,
	useCreateContactMutation,
	useUpdateContactMutation,
} = contactsApi;
