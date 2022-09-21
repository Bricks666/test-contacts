import * as React from 'react';
import { MenuItem } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps, VoidFunction } from '@/interfaces/common';
import {
	EditContact,
	EditContactParams,
	useEditContactMutation,
} from '@/models/contacts';
import {
	CONTACT_NAMES,
	CONTACT_TYPES,
	INPUT_CONTACT_TYPE,
} from '@/consts/contacts';
import { StyledButton, StyledForm } from './styles';
import { Field } from '../Field';
import { Select } from '../Select';
import { contactScheme } from '@/schemes/contact';

export interface EditContactFormProps
	extends CommonProps,
		Required<EditContactParams> {
	readonly afterSubmit?: VoidFunction;
}

export const EditContactForm: React.FC<EditContactFormProps> = React.memo(
	function EditContactForm(props) {
		const { className, id, type, value, afterSubmit } = props;

		const [trigger] = useEditContactMutation();
		const { handleSubmit, watch, control, formState } = useForm<EditContact>({
			defaultValues: {
				type,
				value,
			},
			resolver: joiResolver(contactScheme),
		});

		const onSubmit = React.useCallback<SubmitHandler<EditContact>>(
			async (data) => {
				await trigger({
					id,
					...data,
				});
				if (afterSubmit) {
					afterSubmit();
				}
			},
			[trigger, afterSubmit, id]
		);

		const currentType = watch('type')!;
		const { isDirty, isSubmitting } = formState;
		const disableButton = !isDirty || isSubmitting;

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Select name='type' control={control} label='Тип контакта'>
					{CONTACT_TYPES.map((contactType) => (
						<MenuItem value={contactType} key={contactType}>
							{CONTACT_NAMES[contactType]}
						</MenuItem>
					))}
				</Select>

				<Field
					name='value'
					control={control}
					label='Значение контакта'
					type={INPUT_CONTACT_TYPE[currentType]}
				/>
				<StyledButton variant='outlined' type='submit' disabled={disableButton}>
					Сохранить
				</StyledButton>
			</StyledForm>
		);
	}
);
