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
      <h1>Landing Component</h1>
      <img
        className='ui fluid image'
        src={`http://localhost:1337${landing}`}
        alt=''
      />
      <p>{landing}</p>
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
