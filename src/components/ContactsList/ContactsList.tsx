import * as React from 'react';
import { List } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import { StylesWrapper } from './styles';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { ContactType, useGetContactsQuery } from '@/models/contacts';
import { ContactCard } from '../ContactCard';
import useGetParams from '@/hooks/useGetParams';
import { GET_PARAMS } from '@/consts/getParams';

export interface ContactsListProps extends CommonProps {}

export const ContactsList: React.FC<ContactsListProps> = React.memo(
	function ContactsList(props) {
		const { className } = props;
		const userId = useTypedSelector(getAuthId);
		const type = useGetParams<ContactType>(GET_PARAMS.contactType) || undefined;
		const value = useGetParams(GET_PARAMS.contactValue) || undefined;
		const { data = [] } = useGetContactsQuery({
			userId,
			type,
			value,
		});

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
