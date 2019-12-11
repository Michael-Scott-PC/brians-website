import './InquiryModal.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
// import PropTypes from 'prop-types'

import InquiryForm from '../forms/InquiryForm';

const InquiryModal = props => {
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
    >
      <ModalHeader className='inquiry-modal-header' closeButton>
        <br />
        <h1 className='mt-5 mx-auto make-an-inquiry'>Make an Inquiry</h1>
        <i className='fas fa-envelope inquiry-modal-envelope align-self-end mb-3'></i>
      </ModalHeader>
      <ModalBody>
        <InquiryForm address={props.address} />
      </ModalBody>
    </Modal>
  );
};

// InquiryModal.propTypes = {}

export default InquiryModal;
