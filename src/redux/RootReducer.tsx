import { combineReducers } from 'redux';
import TestReducer from './mainCon/TestReducer';
import ItemReducer from './newItem/ItemReducer'

const reducers = combineReducers({
  test: TestReducer,
  item : ItemReducer,
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootReducer = ReturnType<typeof reducers>;