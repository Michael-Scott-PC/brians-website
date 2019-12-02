import './MortgageCalculator.css';
import React, { Fragment, useState, useRef } from 'react';
import axiosSecondServer from '../../api/axiosSecondServer';
import { Overlay } from 'react-bootstrap';
import { state_choices, programs, credit_range } from './choices';

const MortgageCalculator = () => {
  const [showValueOverlay, setShowValOverlay] = useState(false);
  const targetValue = useRef(null);
  const [showLoanOverlay, setShowLoanOverlay] = useState(false);
  const targetLoan = useRef(null);
  const [showLocationOverlay, setShowLocOverlay] = useState(false);
  const targetLocation = useRef(null);

  const [propertyValue, setPropertyVal] = useState(null);
  const [loanAmount, setLoanAmount] = useState(null);
  const [stateAbbr, setStateAbbr] = useState('US');
  const [zipcode, setZipcode] = useState(null);

  const [currentRate, setCurrentRate] = useState(0);
  const [currentApr, setCurrentApr] = useState(0);

  const getCurrentRates = async () => {
    try {
      const res = await axiosSecondServer.get('/api/calculator/', {
        params: {
          propertyValue,
          loanAmount,
          stateAbbr,
          zipcode
        }
      });
      console.log(res);
      setCurrentRate(res.data.rates[1].rate);
      setCurrentApr(res.data.rates[1].apr);
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log('onFormSubmit ran');

    getCurrentRates();
  };

  return (
    <Fragment>
      <div className='mortgage-calculator col-12 col-md-4 py-5'>
        <div className='mortgage card text-center'>
          <div className='calculator card-title mt-4'>
            <h3>Mortgage Calculator</h3>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className='row mx-2 mb-3'>
              <div className='form-group col'>
                <label htmlFor='home-price'>Property Value &#40;$&#41;</label>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>$</span>
                  </div>
                  <input
                    type='number'
                    id='inlineFormInputGroup'
                    className='form-control'
                    placeholder=''
                    ref={targetValue}
                    onChange={e => setPropertyVal(e.target.value)}
                    onMouseEnter={() => setShowValOverlay(!showValueOverlay)}
                    onMouseLeave={() => setShowValOverlay(!showValueOverlay)}
                  />
                  <Overlay
                    target={targetValue.current}
                    show={showValueOverlay}
                    placement='bottom'>
                    {({
                      placement,
                      scheduleUpdate,
                      arrowProps,
                      outOfBoundaries,
                      show: _show,
                      ...props
                    }) => (
                      <div
                        {...props}
                        style={{
                          backgroundColor: '#aaceaa',
                          padding: '2px 10px',
                          color: 'white',
                          borderRadius: 3,
                          ...props.style
                        }}>
                        Ex: Enter $200,000 as 200000
                      </div>
                    )}
                  </Overlay>
                </div>
              </div>
              <div className='form-group col'>
                <label htmlFor='loan-amount'>Loan Amount &#40;$&#41;</label>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>$</span>
                  </div>
                  <input
                    type='number'
                    id='inlineFormInputGroup'
                    className='form-control'
                    placeholder=''
                    ref={targetLoan}
                    onChange={e => setLoanAmount(e.target.value)}
                    onMouseEnter={() => setShowLoanOverlay(!showLoanOverlay)}
                    onMouseLeave={() => setShowLoanOverlay(!showLoanOverlay)}
                  />
                  <Overlay
                    target={targetLoan.current}
                    show={showLoanOverlay}
                    placement='bottom'>
                    {({
                      placement,
                      scheduleUpdate,
                      arrowProps,
                      outOfBoundaries,
                      show: _show,
                      ...props
                    }) => (
                      <div
                        {...props}
                        style={{
                          backgroundColor: '#aaceaa',
                          padding: '2px 10px',
                          color: 'white',
                          borderRadius: 3,
                          ...props.style
                        }}>
                        Ex: Enter $200,000 as 200000
                      </div>
                    )}
                  </Overlay>
                </div>
              </div>
            </div>
            <div className='row mx-2 mb-3'>
              <div className='form-group col'>
                <label htmlFor='state'>State</label>
                <select
                  onChange={e => setStateAbbr(e.target.value)}
                  id='inputState'
                  className='form-control'>
                  {Object.keys(state_choices).map(state => (
                    <option key={state} defaultValue>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <p
                alt="'or' means you may specify a state or zipcode"
                style={{ color: 'black' }}>
                Or
              </p>
              <div className='form-group col'>
                <label htmlFor='zipcode'>Zipcode</label>
                <input
                  type='number'
                  className='form-control text-center'
                  placeholder='optional'
                  ref={targetLocation}
                  onChange={e => setZipcode(e.target.value)}
                  onMouseEnter={() => setShowLocOverlay(!showLocationOverlay)}
                  onMouseLeave={() => setShowLocOverlay(!showLocationOverlay)}
                />

                <Overlay
                  target={targetLocation.current}
                  show={showLocationOverlay}
                  placement='bottom'>
                  {({
                    placement,
                    scheduleUpdate,
                    arrowProps,
                    outOfBoundaries,
                    show: _show,
                    ...props
                  }) => (
                    <div
                      {...props}
                      style={{
                        backgroundColor: '#aaceaa',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style
                      }}>
                      Leaving State as "US" &amp; Zipcode blank will return
                      national averages.
                    </div>
                  )}
                </Overlay>
              </div>
            </div>
            <div className='row mx-2'>
              <div className='form-group col mb-3'>
                <label htmlFor='program'>Program</label>
                <select id='inputState' className='form-control'>
                  {Object.keys(programs).map(program => (
                    <option key={program} defaultValue>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group col mb-3'>
                <label htmlFor='credit-range'>Credit Range</label>
                <select id='inputState' className='form-control'>
                  {credit_range.map(range => (
                    <option key={range} defaultValue>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button type='submit' href='!#' className='calculate btn my-4'>
                  Calculate
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <label htmlFor='estimates'>Estimates:</label>
              </div>
            </div>
            <div className='row mx-2 mb-3'>
              <div className='input-group col '>
                <div className='input-group-prepend'>
                  <div className='input-group-text'>rate</div>
                </div>
                <input
                  type='text'
                  className='form-control'
                  id='inlineFormInputGroup'
                  placeholder={currentRate}
                />
              </div>
              <div className='input-group col '>
                <div className='input-group-prepend'>
                  <div className='input-group-text'>apr</div>
                </div>
                <input
                  type='text'
                  className='form-control'
                  id='inlineFormInputGroup'
                  placeholder={currentApr}
                />
              </div>
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
