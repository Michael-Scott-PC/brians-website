import './Footer.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { getBrianInfo } from '../../actions/realtor';
import PropTypes from 'prop-types';

const Footer = ({ getBrianInfo, brian: { brian } }) => {
  useEffect(() => {
    getBrianInfo();
  }, [getBrianInfo]);

  console.log(brian);

  const {
    facebook,
    instagram,
    linkedin,
    twitter,
    email,
    cell,
    office_phone
  } = brian;

  // console.log(facebook);
  // console.log(instagram);
  // console.log(linkedin);
  // console.log(twitter);

  return (
    <Fragment>
      <footer className='footer'>
        <div className='foot container-fluid pt-3'>
          <div className='row text-center mb-1'>
            <div className='col-sm-12 mt-4'>
              <a href={`${linkedin}`}>
                <i className='fab fa-linkedin-in mr-2'></i>
              </a>
              <a href={`${facebook}`}>
                <i className='fab fa-facebook-f mr-2'></i>
              </a>
              <a href={`${twitter}`}>
                <i className='fab fa-twitter mr-2'></i>
              </a>
              <a href={`${instagram}`}>
                <i className='fab fa-instagram mr-2'></i>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center mb-1 contact-info'>
                  <i className='fas fa-envelope mr-2'></i>
                  {email}
                </p>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center mb-1 contact-info'>
                  <i className='fas fa-phone mr-2'></i>Office: {office_phone}
                </p>
              </a>
            </div>
          </div>
          <div className='row '>
            <div className='col-sm-12'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                <p className='text-center contact-info'>
                  <i className='fas fa-mobile-alt mr-2'></i>Cell: {cell}
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

Footer.propTypes = {
  getBrianInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  brian: state.realtorReducer
});

export default connect(mapStateToProps, { getBrianInfo })(Footer);