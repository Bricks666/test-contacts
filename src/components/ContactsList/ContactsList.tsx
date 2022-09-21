import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { StylesWrapper } from './styles';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { useGetContactsQuery } from '@/models/contacts';
import { List } from '@mui/material';
import { ContactCard } from '../ContactCard';

export interface ContactsListProps extends CommonProps {}

export const ContactsList: React.FC<ContactsListProps> = React.memo(
	function ContactsList(props) {
		const { className } = props;
		const authId = useTypedSelector(getAuthId);
		const { data = [] } = useGetContactsQuery(authId);
		console.log(data);
		return (
			<StylesWrapper className={className}>
				<List>
					{data.map((contact) => (
						<ContactCard {...contact} key={contact.id} />
					))}
				</List>
			</StylesWrapper>
		);
	}
);
