import './MortgageCalculator.css';
import React, { Fragment } from 'react';

const MortgageCalculator = () => {
  return (
    <Fragment>
      <div className='mortgage-calculator col-12 col-md-4 py-5'>
        <div className='mortgage card text-center'>
          <div className='calculator card-title mt-4'>
            <h3>Mortgage Calculator</h3>
          </div>
          <form>
            <div className='row mx-2'>
              <div className='col mb-3'>
                <label htmlFor='home-price'>Price of Home &#40;$&#41;</label>
                <input type='' className='form-control' placeholder='' />
              </div>
              <div className='col'>
                <label htmlFor='down-payment'>Down Payment &#40;%&#41;</label>
                <input type='' className='form-control' placeholder='' />
              </div>
            </div>
            <div className='row mx-2'>
              <div className='col'>
                <label htmlFor='interest-rate'>Interest Rate &#40;%&#41;</label>
                <input type='' className='form-control' placeholder='' />
              </div>
              <div className='col'>
                <label htmlFor='loan-term'>Loan Term &#40;years&#41;</label>
                <input type='' className='form-control' placeholder='' />
              </div>
            </div>
            <a href='#' className='calculate btn my-4'>
              Calculate
            </a>
            <div>
              <label htmlFor='estimate'>Estimate:</label>
              <input
                type=''
                className='form-control estimate mx-auto mb-4'
                placeholder=''
              />
            </div>
          </form>
          <p className='zillow'>
            See more{' '}
            <a href='http://www.zillow.com/mortgage-rates/.'>mortgage rates</a>{' '}
            on Zillow
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default MortgageCalculator;
