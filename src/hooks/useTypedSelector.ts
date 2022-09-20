import { AppState } from '@/models';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useTypedSelector;
