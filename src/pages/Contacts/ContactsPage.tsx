import { ContactsList } from '@/components/ContactsList';
import { CreateContactForm } from '@/components/CreateContactForm';
import { MainLayout } from '@/layouts/MainLayout';
import { Typography } from '@mui/material';
import * as React from 'react';

const ContactsPage: React.FC = () => {
	return (
		<MainLayout>
			<Typography variant='h2' align='center'>
				Контакты
			</Typography>
			<CreateContactForm />
			<ContactsList />
		</MainLayout>
	);
};

export default ContactsPage;
