import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, MenuItem } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import { StyledForm } from './styles';
import { Select } from '../Select';
import { Field } from '../Field';
import { SearchContact } from './types';
import { SEARCH_CONTACT_NAMES, SEARCH_CONTACT_TYPES } from './data';
import { INPUT_CONTACT_TYPE } from '@/consts/contacts';
import { ContactType } from '@/models/contacts';
import { searchContactScheme } from './scheme';
import prepareLink from '@/utils/prepareLink';
import { GET_PARAMS } from '@/consts/getParams';

export interface ContactSearchProps extends CommonProps {}

export const ContactSearch: React.FC<ContactSearchProps> = React.memo(
	function ContactSearch(props) {
		const { className } = props;
		const { control, watch, handleSubmit } = useForm<SearchContact>({
			defaultValues: {
				type: '',
				value: '',
			},
			resolver: joiResolver(searchContactScheme),
		});
		const navigate = useNavigate();
		const location = useLocation();

		const currentType = watch('type') || '';

		const onSubmit = React.useCallback<SubmitHandler<SearchContact>>(
			({ type, value }) => {
				navigate(
					prepareLink(location, {
						query: {
							[GET_PARAMS.contactType]: type,
							[GET_PARAMS.contactValue]: value,
						},
					})
				);
			},
			[navigate, location]
		);

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Select name='type' control={control} label='Тип контакта'>
					{SEARCH_CONTACT_TYPES.map((type) => (
						<MenuItem value={type} key={type}>
							{SEARCH_CONTACT_NAMES[type]}
						</MenuItem>
					))}
				</Select>
				<Field
					name='value'
					control={control}
					label='Контакт'
					type={INPUT_CONTACT_TYPE[currentType as ContactType] || 'text'}
				/>
				<Button type='submit' variant='outlined'>
					Искать
				</Button>
			</StyledForm>
		);
	}
);
