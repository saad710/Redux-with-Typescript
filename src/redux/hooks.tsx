import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducer } from './RootReducer';
export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;