import './RecentListing.css';
import React, { Fragment } from 'react';
import Longworth from '../../img/placeholders/longworth_cover.jpg';
import Listing from './Listing';

const RecentListing = () => {
  return (
    <Fragment>
      <div className='recent-listing col-12 col-md-8 my-5'>
        <div class='recent-listing card-header text-center mx-3'>
          <h3>Most Recent Listing</h3>
        </div>
        <Listing />
      </div>
    </Fragment>
  );
};

export default RecentListing;
