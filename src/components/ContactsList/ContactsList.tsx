import * as React from 'react';
import { List, Typography } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import { StyledProgress } from './styles';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { useGetContactsQuery } from '@/models/contacts';
import { ContactCard } from '../ContactCard';
import useGetParams from '@/hooks/useGetParams';
import { GET_PARAMS } from '@/consts/getParams';

export interface ContactsListProps extends CommonProps {}

export const ContactsList: React.FC<ContactsListProps> = React.memo(
	function ContactsList(props) {
		const { className } = props;
		const userId = useTypedSelector(getAuthId);
		const search = useGetParams(GET_PARAMS.search) || undefined;
		const {
			data = [],
			isLoading,
			isFetching,
			isError,
		} = useGetContactsQuery({
			userId,
			search,
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
