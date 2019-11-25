import './Navbar.css';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import skyline from '../../img/navbar/ds_3x.png';

const Navbar = ({ changeClass, toggle }) => {
  const [bar1, setBar1] = useState(false);
  const [bar2, setBar2] = useState(false);
  const [bar3, setBar3] = useState(false);

  toggle = () => {
    bar1 ? setBar1(false) : setBar1(true);
    bar2 ? setBar2(false) : setBar2(true);
    bar3 ? setBar3(false) : setBar3(true);
  };

  // changeClass = () => {
  //   const bar1 = document.getElementsByClassName('navbar-toggler-line1');
  //   const bar2 = document.getElementsByClassName('navbar-toggler-line2');
  //   const bar3 = document.getElementsByClassName('navbar-toggler-line3');
  //   bar1[0].classList.toggle('one');
  //   bar2[0].classList.toggle('two');
  //   bar3[0].classList.toggle('three');
  // };

  return (
    <Fragment>
      <nav className='navbar navbar-expand-sm sticky-top'>
        <button
          //onClick={() => changeClass()}
          onClick={toggle}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          {/* <div className={'navbar-toggler-line1'}></div>
          <div className={'navbar-toggler-line2'}></div>
          <div className={'navbar-toggler-line3'}></div> */}
          <div
            className={
              !bar1 ? 'navbar-toggler-line1' : 'navbar-toggler-line1 one'
            }></div>
          <div
            className={
              !bar2 ? 'navbar-toggler-line2' : 'navbar-toggler-line2 two'
            }></div>
          <div
            className={
              !bar3 ? 'navbar-toggler-line3' : 'navbar-toggler-line3 three'
            }></div>
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

export default Navbar;
