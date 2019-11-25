import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
import Footer from '../components/layout/Footer';

import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
