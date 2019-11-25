import React, { Fragment } from 'react';

import About from '../realtor/About';
import Landing from '../layout/Landing';
import Navbar from '../layout/Navbar';
import RecentListing from '../listings/RecentListing';
import MortgageCalculator from '../calculators/MortgageCalculator';
import Testimonials from '../customers/Testimonials';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <div className='container'>
        <div className='row'>
          <RecentListing />
          <MortgageCalculator />
        </div>
      </div>
      <About />
      <Testimonials />
    </Fragment>
  );
};

export default Home;
