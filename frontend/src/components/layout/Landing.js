import './Landing.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLandingImage } from '../../actions/landing';
import Spinner from '../spinner/Spinner';

const Landing = ({ getLandingImage, landing: { landing, loading } }) => {
  useEffect(() => {
    getLandingImage();
  }, [getLandingImage]);

  return (
    <Fragment>
      {landing === null || loading ? (
        <Spinner />
      ) : (
        <img
          className='landing img-fluid'
          src={`http://localhost:1337${landing}`}
          alt=''
        />
      )}
    </Fragment>
  );
};

Landing.propTypes = {
  getLandingImage: PropTypes.func.isRequired,
  landing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  landing: state.landingReducer
});

export default connect(mapStateToProps, { getLandingImage })(Landing);
