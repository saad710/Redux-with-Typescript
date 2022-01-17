// import { combineReducers } from "redux";
// import TestReducer from "./mainCon/TestReducer";

// const RootReducers = combineReducers({
//   TestReducer,
// });

// export default RootReducers;

import { combineReducers } from 'redux';
import TestReducer from './mainCon/TestReducer';

const reducers = combineReducers({
  test: TestReducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootReducer = ReturnType<typeof reducers>;