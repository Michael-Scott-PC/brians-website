import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Realtors from './components/Realtors';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Provider store={store}>
      <Landing />
      <Realtors />
    </Provider>
  );
};

export default App;
