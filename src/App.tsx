import React, { memo, useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import debounce from 'lodash.debounce';

import Input from './shared/components/Input/Input';
import store from './shared/store';

import './App.scss';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const filterPhrase = event.target.value;
    setInputValue(filterPhrase);
    searchDebounced(filterPhrase);
  }

  const searchDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        if (filterPhrase) {
          console.log('działa');
        }
      }, 600),
    [inputValue],
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
            value={inputValue}
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
