import * as React from 'react';
import { TextField } from '@mui/material';
import {
	useController,
	UseControllerProps,
	FieldValues,
} from 'react-hook-form';
import { CommonProps } from '@/interfaces/common';

export interface FieldProps<F extends FieldValues>
	extends CommonProps,
		UseControllerProps<F>,
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'color' | 'size' | 'name' | 'defaultValue'
		> {
	readonly label?: string;
}

export const Field = React.memo(function Field<F extends FieldValues>(
	props: FieldProps<F>
) {
	const { control, name, defaultValue, rules, shouldUnregister, ...rest } = props;
	const { field, fieldState } = useController({
		control,
		name,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const { ref, ...fieldProps } = field;
	const { error } = fieldState;
	return (
		<TextField
			{...fieldProps}
			inputRef={ref}
			error={!!error}
			helperText={error?.message}
			{...rest}
			variant='outlined'
		/>
	);
});
