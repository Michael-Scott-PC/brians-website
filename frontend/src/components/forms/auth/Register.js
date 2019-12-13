import './Register.css';
import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
// import PropTypes from 'prop-types'

// import { createUser } from '../../../actions/profile';
import RegisterSchema from '../schemas/registerSchema';
import Google from '../../../img/google/google2x.png';
import Goog from '../../../img/google/goog2x.png';

const Register = ({ createUser }) => {
  return (
    <Fragment>
      <Formik
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            // createUser(values);
            setSubmitting(false);
            resetForm(true);
          }, 400);
        }}
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          question: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Fragment>
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <Form.Group controlId='formGroupFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='first_name'
                      placeholder='enter first name'
                      className='text-center'
                      value={values.first_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.first_name && !errors.first_name}
                      isInvalid={touched.first_name && errors.first_name}
                      required
                    />
                    {errors.first_name && touched.first_name ? (
                      <p style={{ color: 'red' }}>{errors.first_name}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <Form.Group controlId='formGroupLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='last_name'
                      placeholder='enter last name'
                      className='text-center'
                      value={values.last_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isValid={touched.last_name && !errors.last_name}
                      isInvalid={touched.last_name && errors.last_name}
                      required
                    />
                    {errors.last_name && touched.last_name ? (
                      <p style={{ color: 'red' }}>{errors.last_name}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='enter email'
                      className='text-center'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                      required
                    />
                    {errors.email && touched.email ? (
                      <p style={{ color: 'red' }}>{errors.email}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <Form.Group controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='text'
                      name='password1'
                      placeholder='enter password'
                      className='text-center'
                      value={values.password1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password1 && !errors.password1}
                      isInvalid={touched.password1 && errors.password1}
                      required
                    />
                    {errors.password1 && touched.password1 ? (
                      <p style={{ color: 'red' }}>{errors.password1}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <Form.Group controlId='formGroupPassword2'>
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                      type='text'
                      name='password2'
                      placeholder='re-enter password'
                      className='text-center'
                      value={values.password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password2 && !errors.password2}
                      isInvalid={touched.password2 && errors.password2}
                      required
                    />
                    {errors.password2 && touched.password2 ? (
                      <p style={{ color: 'red' }}>{errors.password2}</p>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='col-11 col-md-4 mb-3 mx-auto text-center'>
                  <Button className='mt-4 mb-3 submit-inquiry' type='submit'>
                    Submit
                  </Button>
                </Col>
              </Row>
              <span className='divider mx-auto'></span>
              <h1 className='text-center'>Or Sign In with Google</h1>
              <Row>
                <Col className='col-8 mx-auto text-center'>
                  <button className='primary'>
                    <Row>
                      <Col>
                        <div className='google-icon'>
                          <img
                            src={Google}
                            alt='google icon'
                            style={{ width: '35%', height: 'auto' }}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className='google-name'>
                          <img
                            src={Goog}
                            alt='google name'
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </button>
                </Col>
              </Row>
            </Form>
          </Fragment>
        )}
      </Formik>
    </Fragment>
  );
};

// Register.propTypes = {}

export default Register;
