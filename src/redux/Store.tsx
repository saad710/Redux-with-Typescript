import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./RootReducer";

// type initialProps = {
//     test : {}[],
//     pro : []
//  }

export function configureStore(InitialState:any) {
  const Store = createStore(
    RootReducers,
    InitialState,
   applyMiddleware(thunk)
  );
  return Store;
}