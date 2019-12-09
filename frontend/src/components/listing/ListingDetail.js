import './ListingDetail.css';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getListing } from '../../actions/listing';

import Spinner from '../spinner/Spinner';
import PicModal from './PicModal';

const ListingDetail = ({
  getListing,
  listingReducer: { listing, loading },
  match
}) => {
  useEffect(() => {
    getListing(match.params.id);
  }, [getListing, match.params.id]);

  // Show the picture modal
  const [show, setShow] = useState({
    show: false,
    currentPhoto: ''
  });

  const {
    address,
    availability,
    basement,
    bedrooms,
    bathrooms,
    city,
    cooling,
    cover_photo, // cover_photo is an object
    description,
    garage,
    heating,
    heating_fuel,
    id, // could use this to implement 'favorite' feature
    list_date,
    lot_size,
    open_house_date,
    open_house_end_time,
    photos, // photos is an array containing objects
    price,
    property_type,
    // publish,
    realtor, // realtor is an object
    school_district,
    square_feet,
    state,
    summer_tax,
    // updatedAt, // could use this to notify anyone with it favorited
    water,
    winter_tax,
    year_built,
    zipcode
  } = listing; // listing is an object

  const renderCoverPhoto = () => {
    if (cover_photo) {
      const { url } = cover_photo;
      return `http://localhost:1337${url}`;
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
          onClick={() =>
            setShow({ show: true, currentPhoto: renderCoverPhoto() })
          }
        />
        <PicModal
          show={show.show}
          currentphoto={show.currentPhoto}
          photos={photos}
          onHide={() => setShow(false)}
        />
        {/* <Modal
          show={show}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <Modal.Header closeButton></Modal.Header>
        </Modal> */}
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className='container thumbnail-container mb-4'>
              <div className='row justify-content-center'>
                {photos &&
                  photos.map(photo => (
                    <div key={photo.id} className='col-6 my-3'>
                      <img
                        className='img-fluid thumbnail-img'
                        src={`http://localhost:1337${photo.url}`}
                        alt='pictures of a property'
                        onClick={() => setShow(true)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </Fragment>
        )}
        <div className='container'>
          <div className='row'>
            <ul className='listing-details-list col-12'>
              <div className='row'>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'> Availability: </div>{' '}
                  <div className='detail col-6'>{availability}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Type: </div>
                  <div className='detail col-6'>{property_type}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Price: </div>
                  <div className='detail col-6'>
                    <NumberFormat
                      value={price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Year Built: </div>
                  <div className='detail col-6'>{year_built}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Lot Size: </div>
                  <div className='detail col-6'>{lot_size}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Sqft: </div>
                  <div className='detail col-6'>
                    <NumberFormat
                      value={square_feet}
                      displayType={'text'}
                      thousandSeparator={true}
                    />
                  </div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Bedrooms: </div>
                  <div className='detail col-6'>{bedrooms}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Bathrooms: </div>
                  <div className='detail col-6'>{bathrooms}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Basement: </div>
                  <div className='detail col-6'>{basement}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Garage: </div>
                  <div className='detail col-6'>{garage}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Summer Tax: </div>
                  <div className='detail col-6'>{summer_tax}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Winter Tax: </div>
                  <div className='detail col-6'>{winter_tax}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Heating: </div>
                  <div className='detail col-6'>{heating}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Heating Fuel: </div>
                  <div className='detail col-6'>{heating_fuel}</div>
                </li>
                <li className='listing-detail-item col-6 d-flex'>
                  <div className='detail-header col-6'>Water: </div>
                  <div className='detail col-6'>{water}</div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>Cooling: </div>
                  <div className='detail col-8'>{cooling}</div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>School District: </div>
                  <div className='detail col-8'>{school_district}</div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>List Date: </div>
                  <div className='detail col-8'>
                    {moment(list_date).format('MM-DD-YYYY')}
                  </div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>Next Open House: </div>
                  <div className='detail col-8'>
                    {moment(open_house_date).format('MM-DD-YYYY')}{' '}
                  </div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>Open House Time: </div>
                  <div className='detail col-8'>
                    {moment(open_house_date).format('h:mma')} -{' '}
                    {moment(open_house_end_time).format('h:mma')}
                  </div>
                </li>
                <li className='listing-detail-item col-12 d-flex'>
                  <div className='detail-header col-4'>Realtor: </div>
                  <div className='detail col-8'>{realtor && realtor.name}</div>
                </li>
              </div>
              <h2 className='mb-0 mt-3 d-inline-block'>Description</h2>
              <i className='fas fa-home ml-2'></i>
              <div className='container description-container text-center mb-4 p-4'>
                <p className='description-paragraph'>{description}</p>
                <Link to={`/listings/${id}`} className='inquiry btn'>
                  Make Inquiry
                </Link>
              </div>
            </ul>
          </div>
        </div>
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
