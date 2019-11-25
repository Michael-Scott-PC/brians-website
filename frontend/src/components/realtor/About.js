import './About.css';
import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBrianInfo } from '../../actions/realtor';

const About = ({ getBrianInfo, brian: { brian } }) => {
  useEffect(() => {
    getBrianInfo();
  }, [getBrianInfo]);

  return (
    <Fragment>
      <div className='container'>
        {brian === null || brian.loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='about'>
            <p>{brian.about}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

About.propTypes = {
  getBrianInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  brian: state.realtorReducer
});

export default connect(mapStateToProps, { getBrianInfo })(About);
