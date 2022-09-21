import { useCallback, useState } from 'react';
type UseToggleResult = [boolean, VoidFunction];

const useToggle = (defaultValue = false): UseToggleResult => {
	const [value, setValue] = useState(defaultValue);

	const toggle = useCallback(() => setValue((value) => !value), []);

	return [value, toggle];
};

export default useToggle;
