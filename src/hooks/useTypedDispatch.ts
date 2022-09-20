import { AppDispatch } from '@/models';
import { useDispatch } from 'react-redux';

const useTypedDispatch: () => AppDispatch = useDispatch;

export default useTypedDispatch;
