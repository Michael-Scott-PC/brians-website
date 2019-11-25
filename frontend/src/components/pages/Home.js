import React, { Fragment } from 'react';

import About from '../realtor/About';
import Landing from '../layout/Landing';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <About />
      <div className='home'>
        <h1>Home Component</h1>
        <h1>Home Component</h1>
        <h1>Home Component</h1>
        <h1>Home Component</h1>
        <h1>Home Component</h1>
      </div>
    </Fragment>
  );
};

export default Home;
