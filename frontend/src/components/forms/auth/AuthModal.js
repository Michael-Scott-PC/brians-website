import './AuthModal.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';

import Register from './Register';
// import Login from './Login';

const AuthModal = props => {
  const cleanUp = () => {
    document.getElementById('root').classList.remove('blur');
  };

  if (props.show) {
    document.getElementById('root').classList.add('blur');
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onExit={cleanUp}
      onHide
    >
      <Row className='nav-row col-6'>
        <Nav className='auth-nav-tabs' variant='tabs' defaultActiveKey='#!'>
          <Nav.Item className='auth-nav-item col-6'>
            <Nav.Link href='#!'>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item className='auth-nav-item col-6'>
            <Nav.Link eventKey='link-1'>Register</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Modal.Body>
        <Row>
          <Col className='col-3 offset-9'>
            <Modal.Header className='auth-header' closeButton></Modal.Header>
          </Col>
        </Row>
        <Register />
      </Modal.Body>
    </Modal>
  );
};

// AuthModal.propTypes = {};

// const mapStateToProps = state => ({});

export default AuthModal;
