import * as React from 'react';
import { useForm, SubmitHandler, Control, FieldValues } from 'react-hook-form';
import { Button } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { StyledForm, StyledLegend } from './styles';
import { CreateContact, useCreateContactMutation } from '@/models/contacts';
import { Field } from '../Field';
import { contactScheme } from '@/schemes/contact';

export interface CreateContactFormProps extends CommonProps {}

export const CreateContactForm: React.FC<CreateContactFormProps> = React.memo(
	function CreateContactForm(props) {
		const { className } = props;

		const userId = useTypedSelector(getAuthId);
		const [trigger] = useCreateContactMutation();
		const { control, handleSubmit, formState, reset } = useForm<CreateContact>({
			defaultValues: {
				name: '',
				value: '',
			},
			resolver: joiResolver(contactScheme),
		});

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
				<StyledLegend variant='h6'>Добавление контакта</StyledLegend>
				<Field
					name='name'
					control={control as unknown as Control<FieldValues>}
					label='Имя контакта'
				/>
				<Field
					name='value'
					control={control as unknown as Control<FieldValues>}
					label='Значение контакта'
				/>
				<Button variant='outlined' type='submit' disabled={disableButton}>
					Добавить
				</Button>
			</StyledForm>
		);
	}
);
