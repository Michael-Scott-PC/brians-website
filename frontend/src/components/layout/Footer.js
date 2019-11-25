import './Footer.css';
import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='container-fluid pt-3'>
          <div className='row text-center mb-1'>
            <div className='col-sm-12 mt-4'>
              <a href='!#'>
                <i className='fab fa-linkedin-in mr-2'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-facebook-f mr-2'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-twitter mr-2'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-instagram mr-2'></i>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center mb-1 contact-info'>
                  <i className='fas fa-envelope mr-2'></i>brian@aredetroit.com
                </p>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center mb-1 contact-info'>
                  <i className='fas fa-phone mr-2'></i>Office: 313-230-0510
                </p>
              </a>
            </div>
          </div>
          <div className='row '>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center contact-info'>
                  <i className='fas fa-mobile-alt mr-2'></i>Cell: 734-991-3140
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
