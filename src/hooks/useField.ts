import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';

interface UseFieldResult<
	T extends string,
	Event extends ChangeEvent<HTMLInputElement> | SelectChangeEvent<T>
> {
	readonly value: T;
	readonly onChange: (evt: Event) => unknown;
	readonly reset: VoidFunction;
}

const useField = <
	T extends string,
	Event extends
		| ChangeEvent<HTMLInputElement>
		| SelectChangeEvent<T> = ChangeEvent<HTMLInputElement>
>(
	defaultValue: T
): UseFieldResult<T, Event> => {
	const [value, setValue] = useState<T>(defaultValue);

	const onChange = useCallback((evt: Event) => {
		setValue(evt.target.value as T);
	}, []);

	const reset = useCallback(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	return {
		value,
		onChange,
		reset,
	};
};

export default useField;
