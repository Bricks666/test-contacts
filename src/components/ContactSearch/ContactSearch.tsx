import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Control, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import { StyledForm } from './styles';
import { Field } from '../Field';
import { SearchContact } from './types';
import { searchContactScheme } from './scheme';
import prepareLink from '@/utils/prepareLink';
import { GET_PARAMS } from '@/consts/getParams';

export interface ContactSearchProps extends CommonProps {}

export const ContactSearch: React.FC<ContactSearchProps> = React.memo(
	function ContactSearch(props) {
		const { className } = props;
		const { control, handleSubmit } = useForm<SearchContact>({
			defaultValues: {
				search: '',
			},
			resolver: joiResolver(searchContactScheme),
		});
		const navigate = useNavigate();
		const location = useLocation();

		const onSubmit = React.useCallback<SubmitHandler<SearchContact>>(
			({ search }) => {
				navigate(
					prepareLink(location, {
						query: {
							[GET_PARAMS.search]: search,
						},
					})
				);
			},
			[navigate, location]
		);

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Field
					name='search'
					control={control as unknown as Control}
					label='Имя или значение контакта'
				/>
				<Button type='submit' variant='outlined' endIcon={<SearchIcon />}>
					Искать
				</Button>
			</StyledForm>
		);
	}
);
