import './Listing.css';
import React, { Fragment } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const Listing = ({ listing }) => {
  return (
    <Fragment>
      <div className='card mx-3 text-center'>
        <img
          className='card-img-top img-fluid'
          src={`http://localhost:1337${listing.cover_photo.url}`}
          alt={listing.description}
        />
        <div className='card-img-overlay'>
          <h2>
            <span className='badge badge-primary'>
              <NumberFormat
                value={listing.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
          </h2>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>
            {listing.address} <br /> {listing.city}, {listing.state}{' '}
            {listing.zipcode}
          </h4>
          <p className='info'>
            <i className='fab fa-microsoft mr-2'></i> Sqft:{' '}
            {listing.square_feet}
          </p>
          <p className='info'>
            <i className='fas fa-bath mr-2'></i> Bathrooms: {listing.bathrooms}
          </p>
          <p className='info'>
            <i className='fas fa-bed mr-2'></i> Bedroom: {listing.bedrooms}
          </p>
          <a href='!#' className='info btn'>
            More Info
          </a>
        </div>
      </div>
    </Fragment>
  );
};

Listing.propTypes = {
  listing: PropTypes.object.isRequired
};

export default Listing;
