import './InquiryForm.css';
import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types'

const InquiryForm = ({ address }) => {
  return (
    <Fragment>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Property</Form.Label>
          <Form.Control
            type='text'
            placeholder={address}
            style={{ fontWeight: 'bold' }}
          />
        </Form.Group>
        <div className='container'>
          <div className='row'>
            <div className='col-6 left-input-fields'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='enter first name' />
              </Form.Group>
            </div>
            <div className='col-6 right-input-fields'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='enter last name' />
              </Form.Group>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6 left-input-fields'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
            </div>
            <div className='col-6 right-input-fields'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='text' placeholder='Enter phone' />
              </Form.Group>
            </div>
          </div>
        </div>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Question?</Form.Label>
          <Form.Control as='textarea' placeholder='Enter email' />
        </Form.Group>
        <div className='container'>
          <div className='row justify-content-center'>
            <Button className='mt-4 submit-inquiry' type='submit'>
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Fragment>
  );
};

// InquiryForm.propTypes = {}

export default InquiryForm;
