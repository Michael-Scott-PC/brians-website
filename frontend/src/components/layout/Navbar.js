import './Navbar.css';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import skyline from '../../img/navbar/ds_3x.png';

const Navbar = ({ toggle }) => {
  const [bar1, setBar1] = useState(false);
  const [bar2, setBar2] = useState(false);
  const [bar3, setBar3] = useState(false);

  toggle = () => {
    bar1 ? setBar1(false) : setBar1(true);
    bar2 ? setBar2(false) : setBar2(true);
    bar3 ? setBar3(false) : setBar3(true);
  };

  return (
    <Fragment>
      <nav className='navbar navbar-expand-sm sticky-top'>
        <button
          onClick={toggle}
          id='navbar-toggler'
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <div
            className={
              !bar1 ? 'navbar-toggler-line1' : 'navbar-toggler-line1 one'
            }
          ></div>
          <div
            className={
              !bar2 ? 'navbar-toggler-line2' : 'navbar-toggler-line2 two'
            }
          ></div>
          <div
            className={
              !bar3 ? 'navbar-toggler-line3' : 'navbar-toggler-line3 three'
            }
          ></div>
        </button>
        <img
          className='skyline mx-auto'
          src={skyline}
          alt='detroit skyline outline'
        />
      </nav>
      <div className='collapse sticky-top' id='navbarToggleExternalContent'>
        <Link to='/' className='dropdown-item pt-4'>
          Home
        </Link>
        <Link to='/listings' className='dropdown-item pt-4'>
          Listings
        </Link>
        <Link to='/news-events' className='dropdown-item pt-4'>
          News &amp; Events
        </Link>
        <Link to='/contacts' className='dropdown-item pt-4'>
          Contact
        </Link>
        <Link to='/signin' className='dropdown-item pt-4'>
          Sign In or Join
        </Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
