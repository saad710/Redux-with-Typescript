import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './RootReducer';

export const store = createStore(reducers, {}, applyMiddleware(thunk));