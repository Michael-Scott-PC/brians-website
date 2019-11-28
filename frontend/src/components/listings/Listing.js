import './Listing.css';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Longworth from '../../img/placeholders/longworth_cover.jpg';

const Listing = props => {
  return (
    <Fragment>
      <div class='card mx-3 text-center'>
        <img className='card-image-top img-fluid' src={Longworth} alt='' />
        <div class='card-img-overlay'>
          <h2>
            <span class='badge badge-primary'>$49,000</span>
          </h2>
        </div>
        <div class='card-body'>
          <h4 class='card-title'>
            8031 Longworth Street <br /> Detroit, MI 48209
          </h4>
          <p className='info'>
            <i class='fab fa-microsoft'></i> Sqft: 1,323
          </p>
          <p className='info'>
            <i class='fas fa-bath'></i> Bathrooms: 2
          </p>
          <p className='info'>
            <i class='fas fa-bed'></i> Bedroom: 4
          </p>
          <a href='#' className='info btn'>
            More Info
          </a>
        </div>
      </div>
    </Fragment>
  );
};

Listing.propTypes = {};

export default Listing;
