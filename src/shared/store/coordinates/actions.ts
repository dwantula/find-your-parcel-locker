import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { RootState } from '..';

import { fetchAddressCoordinates } from '../../services/parcelLocker';

export const GET_ADDRESS_STARTED = 'GET_ADDRESS_STARTED';
export const GET_ADDRESS_FULFILLED = 'GET_ADDRESS_FULFILLED';
export const GET_ADDRESS_REJECTED = 'GET_ADDRESS_REJECTED';

export const thunkGetAddressCoordinates = (
  address: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch: ThunkDispatch<RootState, unknown, Action<string>>,
) => {
  dispatch({ type: GET_ADDRESS_STARTED });
  try {
    const coordinates = await fetchAddressCoordinates(address);
    dispatch({ type: GET_ADDRESS_FULFILLED, payload: coordinates });
  } catch (error) {
    dispatch({ type: GET_ADDRESS_REJECTED, payload: error.message });
  }
};
