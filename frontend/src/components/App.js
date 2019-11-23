import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
//import Realtors from './realtors/Realtors';

import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
