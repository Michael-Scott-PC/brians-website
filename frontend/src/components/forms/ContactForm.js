import './ContactForm.css';
import React, { Fragment, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types'

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted.');
  };

  return (
    <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
      <Row>
        <Col className='text-center'>
          <h1 className='mt-5 mx-auto get-in-touch'>
            Get in touch!{' '}
            <i className='fas fa-envelope contact-form-envelope align-self-end mb-3'></i>
          </h1>
          {/* <i className='fas fa-envelope inquiry-modal-envelope align-self-end mb-3'></i> */}
        </Col>
      </Row>
      <Row>
        <Col className='col-8 mx-auto text-center'>
          <Form.Group controlId='formGroupFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter first name'
              className='text-center'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='col-8 mx-auto text-center'>
          <Form.Group controlId='formGroupLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter last name'
              className='text-center'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='col-8 mx-auto text-center'>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='enter email'
              className='text-center'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='col-8 mx-auto text-center'>
          <Form.Group controlId='formGroupPhoneNumber'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              className='text-center'
              type='Phone'
              placeholder='enter Phone'
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='col-8 mb-3 mx-auto text-center'>
          <Form.Group controlId='formGroupTextArea'>
            <Form.Label>How may I help you?</Form.Label>
            <Form.Control as='textarea' required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className='col-11 mb-3 mx-auto text-center'>
          <Button className='mt-4 mb-5 submit-inquiry' type='submit'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

// ContactForm.propTypes = {}

export default ContactForm;
