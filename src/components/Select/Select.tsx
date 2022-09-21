import * as React from 'react';
import {
	FormControl,
	FormHelperText,
	InputLabel,
	Select as MUISelect,
} from '@mui/material';
import {
	UseControllerProps,
	useController,
	FieldValues,
} from 'react-hook-form';
import { CommonProps } from '@/interfaces/common';

export interface SelectProps<F extends FieldValues>
	extends CommonProps,
		UseControllerProps<F>,
		Omit<
			React.SelectHTMLAttributes<HTMLInputElement>,
			'size' | 'color' | 'defaultValue' | 'name' | 'onChange'
		> {
	readonly label?: string;
}

export const Select = <F extends FieldValues>(
	props: React.PropsWithChildren<SelectProps<F>>
) => {
	const {
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
		children,
		className,
		label,
		...rest
	} = props;

	const selectLabelId = React.useId();
	const { field, fieldState } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});
	const { ref, ...selectProps } = field;
	const { error } = fieldState;

	return (
		<FormControl className={className} variant='outlined'>
			<InputLabel id={selectLabelId}>{label}</InputLabel>
			<MUISelect
				label={label}
				variant='outlined'
				labelId={selectLabelId}
				inputRef={ref}
				{...selectProps}
				{...rest}
			>
				{children}
			</MUISelect>
			<FormHelperText error={!!error}>{error?.message}</FormHelperText>
		</FormControl>
	);
};
