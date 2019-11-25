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

  //   console.log(brian);
  //   console.log(brian_headshot_url);
  if (!about) {
    return null;
  } else {
    const jsx_about = render(
      <Markdown>{about}</Markdown>,
      document.getElementById('root')
    );
  }

  return (
    <Fragment>
      <div className='about container-fluid pt-4'>
        {brian === null || brian_headshot_url === null || loading ? (
          <Spinner />
        ) : (
          <div className='card'>
            <img src={brian_headshot_url} alt='' className='card-img-top' />
            <div className='about card-body'>
              <h2 className='about card-title text-center'>
                ABOUT BRIAN
                <span className='underline d-block mx-auto'></span>
              </h2>
              <div className='card-text'>{about}</div>
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
