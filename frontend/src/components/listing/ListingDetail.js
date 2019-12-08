import './ListingDetail.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getListing } from '../../actions/listing';

import Spinner from '../spinner/Spinner';

const ListingDetail = ({
  getListing,
  listingReducer: { listing, loading },
  match
}) => {
  useEffect(() => {
    getListing(match.params.id);
  }, [getListing, match.params.id]);

  console.log(listing);

  const {
    address,
    bedrooms,
    bathrooms,
    city,
    cover_photo,
    description,
    price,
    photos,
    square_feet,
    state,
    zipcode
  } = listing;

  const renderCoverPhoto = () => {
    if (cover_photo) {
      const { url } = cover_photo;
      return `http://localhost:1337${url}`;
    }
  };

  const renderPhotos = () => {
    if (photos) {
      photos.map(photo => console.log(photo));
    }
  };

  return (
    <Fragment>
      <div className='listing-detail'>
        <div className='address text-center py-4'>
          <h1 className='address'>{address}</h1>
          <p className='address'>
            <i className='fas fa-map-marker-alt mr-2'></i>
            {city}, {state} {zipcode}
          </p>
        </div>
        <img
          className='img-fluid'
          src={renderCoverPhoto()}
          alt={listing.description}
        />
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className='container'>
              <div className='row justify-content-center'>
                {photos &&
                  photos.map(photo => (
                    <div key={photo.id} className='col-6 my-3'>
                      <img
                        className='img-fluid thumbnail-img'
                        src={`http://localhost:1337${photo.url}`}
                        alt=''
                      />
                    </div>
                  ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ListingDetail.propTypes = {
  getListing: PropTypes.func.isRequired,
  listingReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listingReducer: state.listingReducer
});

export default connect(mapStateToProps, { getListing })(ListingDetail);
