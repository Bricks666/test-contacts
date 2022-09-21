import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '@/models';

const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useTypedSelector;
