import { ChangeEventHandler, useCallback, useState } from 'react';

interface UseFieldResult {
	readonly value: string;
	readonly onChange: ChangeEventHandler<HTMLInputElement>;
	readonly reset: VoidFunction;
}

const useField = (defaultValue = ''): UseFieldResult => {
	const [value, setValue] = useState(defaultValue);

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
		setValue(evt.target.value);
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
