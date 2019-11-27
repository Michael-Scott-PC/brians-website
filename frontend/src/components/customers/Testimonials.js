import './Testimonials.css';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { getTestimonials } from '../../actions/testimonial';
// import { render } from 'react-dom';

const Testimonials = ({
  getTestimonials,
  testimonials_object: { loading, testimonials }
}) => {
  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  console.log(testimonials);

  return (
    <Fragment>
      <div className='testimonials container-fluid'>
        <div className='testimonials row'>
          <Carousel className='text-center align-self-center px-3'>
            {testimonials.map((testimonial, textFit) => (
              <Carousel.Item key={testimonial._id}>
                <i className='fas fa-quote-left'></i>
                {testimonial.client_testimonial}
                <i className='fas fa-quote-right'></i>
                <footer className='blockquote-footer'>
                  <cite title='Source Title'>{testimonial.client_name}</cite>
                </footer>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

//   return (
//     <Fragment>
//       <div className='testimonials container-fluid'>
//         <div className='testimonials row'>
//           <Carousel className='text-center align-self-center px-3'>
//             {testimonials.map(testimonial => (
//               <Carousel.Item key={testimonial._id}>
//                 <i className='fas fa-quote-left'></i>
//                 {testimonial.client_testimonial}
//                 <i className='fas fa-quote-right'></i>
//                 <footer className='blockquote-footer'>
//                   <cite title='Source Title'>{testimonial.client_name}</cite>
//                 </footer>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

Testimonials.propTypes = {
  getTestimonials: PropTypes.func.isRequired,
  testimonials_object: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  testimonials_object: state.testimonialReducer
});

export default connect(mapStateToProps, { getTestimonials })(Testimonials);
