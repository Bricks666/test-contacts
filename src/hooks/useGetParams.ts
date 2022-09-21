import { useSearchParams } from 'react-router-dom';

const useGetParams = <T extends string>(param: string): T | null => {
	const [params] = useSearchParams();
	return params.get(param) as T | null;
};

export default useGetParams;
