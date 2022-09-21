import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, MenuItem } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { StyledForm } from './styles';
import {
	CreateContact,
	useCreateContactMutation,
} from '@/models/contacts';
import { Select } from '../Select';
import {
	CONTACT_NAMES,
	CONTACT_TYPES,
	INPUT_CONTACT_TYPE,
} from '@/consts/contacts';
import { Field } from '../Field';
import { createContactFormScheme } from './scheme';

export interface CreateContactFormProps extends CommonProps {}

export const CreateContactForm: React.FC<CreateContactFormProps> = React.memo(
	function CreateContactForm(props) {
		const { className } = props;

		const userId = useTypedSelector(getAuthId);
		const [trigger] = useCreateContactMutation();
		const { control, handleSubmit, watch, formState, reset } =
			useForm<CreateContact>({
				defaultValues: {
					type: 'phone',
					value: '',
				},
				resolver: joiResolver(createContactFormScheme),
			});

		const currentType = watch('type');
		const { isSubmitting, isDirty } = formState;
		const disableButton = !isDirty || isSubmitting;

		const onSubmit = React.useCallback<SubmitHandler<CreateContact>>(
			async (data) => {
				await trigger({
					userId,
					...data,
				});
				reset();
			},
			[userId, reset, trigger]
		);

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Select name='type' control={control} label='Тип контакта'>
					{CONTACT_TYPES.map((type) => (
						<MenuItem value={type} key={type}>
							{CONTACT_NAMES[type]}
						</MenuItem>
					))}
				</Select>

				<Field
					name='value'
					control={control}
					label='Значение контакта'
					type={INPUT_CONTACT_TYPE[currentType] || 'text'}
				/>
				<Button variant='outlined' type='submit' disabled={disableButton}>
					Сохранить
				</Button>
			</StyledForm>
		);
	}
);
