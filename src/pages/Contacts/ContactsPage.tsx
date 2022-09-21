import * as React from 'react';
import { Typography } from '@mui/material';
import { ContactSearch } from '@/components/ContactSearch';
import { ContactsList } from '@/components/ContactsList';
import { CreateContactForm } from '@/components/CreateContactForm';
import { StyledLayout } from './styles';

const ContactsPage: React.FC = () => {
	return (
		<StyledLayout>
			<Typography variant='h2' align='center'>
				Контакты
			</Typography>
			<CreateContactForm />
			<ContactSearch />
			<ContactsList />
		</StyledLayout>
	);
};

export default ContactsPage;
