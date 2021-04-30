import { ReactNode } from 'react';
import { Dispatch } from '..';

import { fetchAddressCoordinates } from '../../services/parcel-locker';

export const GET_ADDRESS_STARTED = 'GET_ADDRESS_STARTED';
export const GET_ADDRESS_FULFILLED = 'GET_ADDRESS_FULFILLED';
export const GET_ADDRESS_REJECTED = 'GET_ADDRESS_REJECTED';

export const getCoordinatesAction: ReactNode = (address: string) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: GET_ADDRESS_STARTED });
  try {
    const getAddress = await fetchAddressCoordinates(address);
    dispatch({ type: GET_ADDRESS_FULFILLED, payload: getAddress });
  } catch (error) {
    dispatch({ type: GET_ADDRESS_REJECTED, payload: error.message });
  }
};
