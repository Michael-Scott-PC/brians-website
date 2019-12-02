import './Listing.css';
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Longworth from '../../img/placeholders/longworth_cover.jpg';

const Listing = props => {
  return (
    <Fragment>
      <div className='card mx-3 text-center'>
        <img className='card-image-top img-fluid' src={Longworth} alt='' />
        <div className='card-img-overlay'>
          <h2>
            <span className='badge badge-primary'>$49,000</span>
          </h2>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>
            8031 Longworth Street <br /> Detroit, MI 48209
          </h4>
          <p className='info'>
            <i className='fab fa-microsoft mr-2'></i> Sqft: 1,323
          </p>
          <p className='info'>
            <i className='fas fa-bath mr-2'></i> Bathrooms: 2
          </p>
          <p className='info'>
            <i className='fas fa-bed mr-2'></i> Bedroom: 4
          </p>
          <a href='!#' className='info btn'>
            More Info
          </a>
        </div>
      </div>
    </Fragment>
  );
};

// Listing.propTypes = {};

export default Listing;
