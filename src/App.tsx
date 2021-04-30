import React, { memo, useState, useMemo } from 'react';
import { Provider, useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';

import Input from './shared/components/Input/Input';
import store from './shared/store';

import './App.scss';
import { fetchAddressCoordinates } from './shared/services/parcelLocker';

function App(): JSX.Element {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const filterPhrase = event.target.value;
    setAddress(filterPhrase);
    searchDebounced(filterPhrase);
  }

  const searchDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        if (filterPhrase) {
          dispatch(fetchAddressCoordinates('Warszawa'));
        }
      }, 600),
    [address],
  );
  return (
    <Provider store={store}>
      <div className="parcel-locker">
        <header className="prcel-locker__heaader">
          Find your parcel locker
        </header>
        <main className="parcel-locker__main">
          <Input
            type="text"
            className="parcel-locker__input"
            placeholder={'Write city, road'}
            name="searchPlaceInput"
            value={address}
            onChange={handleInputChange}
          />
        </main>
        <footer className="parcel-locker__footer">
          <p>Powered by DW</p>
          <div className="parcel-locker__line"></div>
        </footer>
      </div>
    </Provider>
  );
}
export default memo(App);
