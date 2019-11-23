import './Landing.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLandingImage } from '../../actions/landing';

const Landing = ({ getLandingImage, landing: { landing } }) => {
  useEffect(() => {
    getLandingImage();
  }, [getLandingImage]);

  return (
    <Fragment>
      <img
        className='img-fluid'
        src={`http://localhost:1337${landing}`}
        alt=''
      />
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
