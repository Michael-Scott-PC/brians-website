import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import Navbar from '../components/layout/Navbar';
import Navbar from '../components/layout/Navbar';
import Home from '../components/pages/Home';
// import AllListings from '../components/listings/AllListings';
import Listings from '../components/pages/Listings';
import ListingDetail from '../components/listing/ListingDetail';
import Footer from '../components/layout/Footer';

import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/listings' exact component={Listings} />
        <Route path='/listings/:id' exact component={ListingDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
