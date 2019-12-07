import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getListing } from '../../actions/listing';

const ListingDetail = ({ getListing, listingReducer }) => {
  useEffect(() => {
    getListing(match.params.id);
  }, [getListing, match.params.id]);

  console.log(listingReducer);

  return (
    <Fragment>
      <div className='listing-detail container'>LISTING DETAIL COMPONENT</div>
    </Fragment>
  );
};

ListingDetail.propTypes = {
  getListing: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  listingReducer: state.listingReducer
});

export default connect(mapStateToProps, { getListing })(ListingDetail);
