import { useSearchParams } from 'react-router-dom';

const useGetParams = (param: string): string | null => {
	const [params] = useSearchParams();
	return params.get(param);
};

export default useGetParams;
