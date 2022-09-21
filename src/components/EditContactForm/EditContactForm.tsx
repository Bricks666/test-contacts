import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import {
	EditableContact,
	EditContact,
	useEditContactMutation,
} from '@/models/contacts';
import { MenuItem } from '@mui/material';
import {
	CONTACT_NAMES,
	CONTACT_TYPES,
	INPUT_CONTACT_TYPE,
} from '@/consts/contacts';
import { StyledButton, StyledForm } from './styles';
import { editContactFormSchema } from './sheme';
import { Field } from '../Field';
import { Select } from '../Select';

export interface EditContactFormProps
	extends CommonProps,
		Required<EditContact> {
	readonly afterSubmit?: VoidFunction;
}

export const EditContactForm: React.FC<EditContactFormProps> = React.memo(
	function EditContactForm(props) {
		const { className, id, type, value, afterSubmit } = props;

		const [trigger] = useEditContactMutation();
		const { handleSubmit, watch, control, formState } =
			useForm<EditableContact>({
				defaultValues: {
					type,
					value,
				},
				resolver: joiResolver(editContactFormSchema),
			});

		const onSubmit = React.useCallback<SubmitHandler<EditableContact>>(
			async ({ type, value }) => {
				await trigger({
					id,
					type,
					value,
				});
				afterSubmit && afterSubmit();
			},
			[trigger, afterSubmit, id]
		);

		const currentType = watch('type')!;
		const { isDirty, isSubmitting } = formState;
		const disableButton = !isDirty || isSubmitting;

		return (
			<StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
				<Select name='type' control={control} label='Тип контакта'>
					{CONTACT_TYPES.map((type) => (
						<MenuItem value={type} key={value}>
							{CONTACT_NAMES[type]}
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
