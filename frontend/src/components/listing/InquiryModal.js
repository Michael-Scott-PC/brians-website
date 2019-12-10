import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
// import PropTypes from 'prop-types'

import InquiryForm from '../forms/InquiryForm';

const InquiryModal = props => {
  return (
    <Modal>
      <ModalHeader>Make an Inquiry</ModalHeader>
      <ModalBody>
        <h1>TEST TEST</h1>
        <InquiryForm />
      </ModalBody>
    </Modal>
  );
};

// InquiryModal.propTypes = {}

export default InquiryModal;
