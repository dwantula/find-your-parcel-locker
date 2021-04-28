import React from 'react';
import { Provider } from 'react-redux';

import store from './shared/store';

import './App.scss';
import SearchInput from './shared/components/SearchInput/SearchInput';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        TypesScript
        <SearchInput />
      </div>
    </Provider>
  );
}
export default App;
