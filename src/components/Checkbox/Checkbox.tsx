import * as React from 'react';
import {
	FieldValues,
	useController,
	UseControllerProps,
} from 'react-hook-form';
import {
	FormControlLabel,
	Checkbox as MUICheckbox,
	FormControl,
	FormHelperText,
} from '@mui/material';
import { CommonProps } from '@/interfaces/common';

export interface CheckboxProps<F extends FieldValues>
	extends CommonProps,
		UseControllerProps<F> {
	readonly label?: string;
}

export const Checkbox = function Checkbox<F extends FieldValues>(
	props: CheckboxProps<F>
) {
	const {
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
		className,
		label = '',
		...rest
	} = props;
	const { field, fieldState } = useController({
		name,
		control,
		defaultValue,
		rules,
		shouldUnregister,
	});

	const { error } = fieldState;
	const { ref, ...checkboxProps } = field;

	return (
		<FormControl error={!!error} variant='outlined'>
			<FormControlLabel
				className={className}
				labelPlacement='end'
				label={label}
				control={<MUICheckbox {...checkboxProps} inputRef={ref} {...rest} />}
			/>
			<FormHelperText>{error?.message}</FormHelperText>
		</FormControl>
	);
};
