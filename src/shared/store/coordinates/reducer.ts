import React, { ReactNode } from 'react';
import { InitialState, Action } from '../../../types/api';
import {
  GET_ADDRESS_STARTED,
  GET_ADDRESS_FULFILLED,
  GET_ADDRESS_REJECTED,
} from './actions';

const initialState: InitialState = {
  data: {},
  error: '',
};

const conrdinatesReducer: React.ReactNode = (
  state = initialState,
  action: Action,
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
