import { useCallback, useState } from 'react';
import { VoidFunction } from '@/interfaces/common';

type UseToggleResult = [boolean, VoidFunction];

const useToggle = (defaultValue = false): UseToggleResult => {
	const [value, setValue] = useState(defaultValue);

	const toggle = useCallback(
		() => setValue((currentValue) => !currentValue),
		[]
	);

	return [value, toggle];
};

export default useToggle;
