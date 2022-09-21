import { ContactsList } from '@/components/ContactsList';
import { MainLayout } from '@/layouts/MainLayout';
import * as React from 'react';

const ContactsPage: React.FC = () => {
	return (
		<MainLayout>
			<ContactsList />
		</MainLayout>
	);
};

export default ContactsPage;
