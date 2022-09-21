import * as React from 'react';
import { List, Typography } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import { StyledProgress } from './styles';
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
		const {
			data = [],
			isLoading,
			isFetching,
			isError,
		} = useGetContactsQuery({
			userId,
			type,
			value,
		});

		const showLoading = isLoading || isFetching;

		if (isError) {
			return (
				<Typography className={className} align='center'>
					Что то пошло не так, повторите попытку позже
				</Typography>
			);
		}
		if (showLoading) {
			return <StyledProgress className={className} />;
		}
		if (!data.length) {
			return (
				<Typography className={className} align='center'>
					Список контактов пуст
				</Typography>
			);
		}
		return (
			<List className={className}>
				{data.map((contact) => (
					<ContactCard {...contact} key={contact.id} />
				))}
			</List>
		);
	}
);
