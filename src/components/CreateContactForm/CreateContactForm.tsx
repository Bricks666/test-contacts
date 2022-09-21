import * as React from 'react';
import { useForm, SubmitHandler, Control, FieldValues } from 'react-hook-form';
import { Button, MenuItem } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthId } from '@/models/auth';
import { StyledForm, StyledLegend } from './styles';
import { CreateContact, useCreateContactMutation } from '@/models/contacts';
import { Select } from '../Select';
import {
	CONTACT_NAMES,
	CONTACT_TYPES,
	INPUT_CONTACT_TYPE,
} from '@/consts/contacts';
import { Field } from '../Field';
import { contactScheme } from '@/schemes/contact';

export interface CreateContactFormProps extends CommonProps {}

export const CreateContactForm: React.FC<CreateContactFormProps> = React.memo(
	function CreateContactForm(props) {
		const { className } = props;

		const userId = useTypedSelector(getAuthId);
		const [trigger] = useCreateContactMutation();
		const { control, handleSubmit, watch, formState, reset } = useForm<CreateContact>({
			defaultValues: {
				type: 'phone',
				value: '',
			},
			resolver: joiResolver(contactScheme),
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
				<StyledLegend variant='h6'>Добавление контакта</StyledLegend>
				<Select name='type' control={control} label='Тип контакта'>
					{CONTACT_TYPES.map((type) => (
						<MenuItem value={type} key={type}>
							{CONTACT_NAMES[type]}
						</MenuItem>
					))}
				</Select>
				{/*
          Без явного приведения сыпет ошибку типов резолверов
        */}
				<Field
					name='value'
					control={control as unknown as Control<FieldValues>}
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
