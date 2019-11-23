import React, { Fragment } from 'react';

import Landing from '../layout/Landing';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
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
