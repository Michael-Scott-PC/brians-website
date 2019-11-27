import './About.css';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { getBrianInfo, getHeadshot } from '../../actions/realtor';
import Spinner from '../spinner/Spinner';

const About = ({
  getBrianInfo,
  getHeadshot,
  brian: { brian, brian_headshot_url }
}) => {
  useEffect(() => {
    getBrianInfo();
    getHeadshot();
  }, [getBrianInfo, getHeadshot]);

  const { about, loading } = brian;

  if (!about) {
    return null;
  } else {
    setTimeout(function() {
      render(<Markdown>{about}</Markdown>, document.getElementById('markup'));
    }, 500);
  }

  return (
    <Fragment>
      <div className='about container-fluid px-3 py-5'>
        {brian === null ||
        brian_headshot_url === null ||
        about === null ||
        loading ? (
          <Spinner />
        ) : (
          <div className='card'>
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img
                  src={brian_headshot_url}
                  alt=''
                  className='brian card-img-top'
                />
              </div>
              <div className='col-md-8'>
                <div className='about card-body'>
                  <h2 className='about card-title text-center'>
                    ABOUT BRIAN
                    <span className='underline d-block mx-auto'></span>
                  </h2>
                  <div
                    id='markup'
                    className='about card-text text-center'></div>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps, { getBrianInfo, getHeadshot })(About);
