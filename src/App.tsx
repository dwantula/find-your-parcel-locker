import React from 'react';
import { Provider } from 'react-redux';

import store from './shared/store';

import './App.css';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">TypesScript</div>
    </Provider>
  );
}
export default App;
