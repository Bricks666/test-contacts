import * as React from 'react';
import { Typography } from '@mui/material';
import { ContactSearch } from '@/components/ContactSearch';
import { ContactsList } from '@/components/ContactsList';
import { CreateContactForm } from '@/components/CreateContactForm';
import { MainLayout } from '@/layouts/MainLayout';

const ContactsPage: React.FC = () => {
	return (
		<MainLayout>
			<Typography variant='h2' align='center'>
				Контакты
			</Typography>
			<CreateContactForm />
			<ContactSearch />
			<ContactsList />
		</MainLayout>
	);
};

export default ContactsPage;
