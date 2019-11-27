import './RecentListing.css';
import React, { Fragment } from 'react';
import Longworth from '../../img/placeholders/longworth_cover.jpg';

const RecentListing = () => {
  return (
    <Fragment>
      <div className='recent-listing col-12 col-md-8'>
        <div class='card text-center'>
          <div class='card-header'>
            <h3>Most Recent Listing</h3>
          </div>
          <img className='img-fluid' src={Longworth} alt='' />
          <div class='card-body'>
            <h5 class='card-title'>8031 Longworth Street Detroit, MI 48209</h5>
            <a href='#' class='btn btn-primary'>
              More Info
            </a>
          </div>
        </div>

        <form>
          <div class='row'>
            <div class='col'>
              <input
                type='text'
                class='form-control'
                placeholder='First name'
              />
            </div>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Last name' />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RecentListing;
