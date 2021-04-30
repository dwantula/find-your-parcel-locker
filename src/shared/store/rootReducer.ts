import { combineReducers } from 'redux';
import conrdinatesReducer from './coordinates/reducer';

const rootReducer = combineReducers({
  coordinates: conrdinatesReducer,
});

export default rootReducer;
