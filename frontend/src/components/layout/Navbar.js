import './Navbar.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ changeClass }) => {
  changeClass = () => {
    const bar1 = document.getElementsByClassName('navbar-toggler-line1');
    const bar2 = document.getElementsByClassName('navbar-toggler-line2');
    const bar3 = document.getElementsByClassName('navbar-toggler-line3');
    bar1[0].classList.toggle('one');
    bar2[0].classList.toggle('two');
    bar3[0].classList.toggle('three');
  };

  return (
    <Fragment>
      <nav className='navbar navbar-expand-sm sticky-top'>
        <button
          onClick={() => changeClass()}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <div className='navbar-toggler-line1'></div>
          <div className='navbar-toggler-line2'></div>
          <div className='navbar-toggler-line3'></div>
        </button>
      </nav>
      <div className='collapse' id='navbarToggleExternalContent'>
        <Link to='/' className='dropdown-item pt-4'>
          Home
        </Link>
        <Link to='/listings' className='dropdown-item pt-4'>
          Listings
        </Link>
        <Link to='/news-events' className='dropdown-item pt-4'>
          News &amp; Events
        </Link>
        <Link to='/contact' className='dropdown-item pt-4'>
          Contact
        </Link>
        <Link to='/signin' className='dropdown-item pt-4'>
          Sign In or Join
        </Link>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  changeClass: PropTypes.func.isRequired
};

export default Navbar;
