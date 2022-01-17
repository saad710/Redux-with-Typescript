// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import RootReducers from "./RootReducer";



// export function configureStore(InitialState:any) {
//   const Store = createStore(
//     RootReducers,
//     InitialState,
//    applyMiddleware(thunk)
//   );
//   return Store;
// }

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './RootReducer';

export const store = createStore(reducers, {}, applyMiddleware(thunk));