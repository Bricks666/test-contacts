import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps, VoidFunction } from '@/interfaces/common';
import {
	EditContact,
	EditContactParams,
	useEditContactMutation,
} from '@/models/contacts';
import { StyledButton, StyledForm } from './styles';
import { Field } from '../Field';
import { contactScheme } from '@/schemes/contact';

export interface EditContactFormProps
	extends CommonProps,
		Required<EditContactParams> {
	readonly afterSubmit?: VoidFunction;
}

export const EditContactForm: React.FC<EditContactFormProps> = React.memo(
	function EditContactForm(props) {
		const { className, id, name, value, afterSubmit } = props;

		const [trigger] = useEditContactMutation();
		const { handleSubmit, control, formState } = useForm<EditContact>({
			defaultValues: {
				name,
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

		const { isDirty, isSubmitting } = formState;
		const disableButton = !isDirty || isSubmitting;

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Field name='name' control={control} label='Имя контакта' />

				<Field name='value' control={control} label='Значение контакта' />
				<StyledButton variant='outlined' type='submit' disabled={disableButton}>
					Сохранить
				</StyledButton>
			</StyledForm>
		);
	}
);
