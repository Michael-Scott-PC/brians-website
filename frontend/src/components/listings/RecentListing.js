import './RecentListing.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { getRecentListing } from '../../actions/listing';
import PropTypes from 'prop-types';

const RecentListing = ({
  getRecentListing,
  listingReducer: { recentListing, loading }
}) => {
  useEffect(() => {
    getRecentListing();
  }, [getRecentListing]);

  const {
    address,
    bedrooms,
    bathrooms,
    city,
    cover_photo,
    description,
    price,
    square_feet,
    state,
    zipcode
  } = recentListing;

  const renderCoverPhoto = () => {
    if (cover_photo) {
      const { url } = cover_photo;
      return `http://localhost:1337${url}`;
    }
  };

  return (
    <Fragment>
      <div className='recent-listing col-12 col-md-8 my-5'>
        <div className='recent-listing card-header text-center mx-3'>
          <h3>Most Recent Listing</h3>
        </div>
        <div className='card mx-3 text-center'>
          <img
            className='card-image-top img-fluid'
            src={renderCoverPhoto()}
            alt={description}
          />
          <div className='card-img-overlay'>
            <h2>
              <span className='badge badge-primary'>
                <NumberFormat
                  value={price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </span>
            </h2>
          </div>
          <div className='card-body'>
            <h4 className='card-title'>
              {address} <br /> {city}, {state} {zipcode}
            </h4>
            <p className='info'>
              <i className='fab fa-microsoft mr-2'></i> Sqft: {square_feet}
            </p>
            <p className='info'>
              <i className='fas fa-bath mr-2'></i> Bathrooms: {bathrooms}
            </p>
            <p className='info'>
              <i className='fas fa-bed mr-2'></i> Bedroom: {bedrooms}
            </p>
            <a href='!#' className='info btn'>
              More Info
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

RecentListing.propTypes = {
  getRecentListing: PropTypes.func.isRequired,
  listingReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listingReducer: state.listingReducer
});

export default connect(mapStateToProps, { getRecentListing })(RecentListing);
