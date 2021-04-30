import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
export type Dispatch = typeof store.dispatch;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
