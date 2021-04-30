import { AnyAction, Reducer } from 'redux';
import {
  GET_ADDRESS_STARTED,
  GET_ADDRESS_FULFILLED,
  GET_ADDRESS_REJECTED,
} from './actions';

type CoordinatesState = {
  coordinates: unknown;
  error: string;
};

const initialState: CoordinatesState = {
  coordinates: {},
  error: '',
};

const conrdinatesReducer: Reducer = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case GET_ADDRESS_STARTED: {
      return { ...state };
    }
    case GET_ADDRESS_FULFILLED: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GET_ADDRESS_REJECTED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      state;
  }
};

export default conrdinatesReducer;
