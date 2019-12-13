import './AuthModal.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import PropTypes from 'prop-types';

// import Register from './Register';
// import Login from './Login';

const AuthModal = props => {
  console.log(props);
  const cleanUp = () => {
    document.getElementById('root').classList.remove('blur');
  };

  if (props.show) {
    document.getElementById('root').classList.add('blur');
  }

  //   if (sent) {
  //     onHide();
  //   }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onExit={cleanUp}
    >
      <Modal.Header className='auth-modal-header' closeButton>
        <br />
        <h1 className='mt-5 mx-auto make-an-auth'>AUTH MODAL COMPONENT</h1>
        <i className='fas fa-envelope auth-modal-envelope align-self-end mb-3'></i>
      </Modal.Header>
      <Modal.Body>
        <h1>AUTH MODAL BODY</h1>
      </Modal.Body>
    </Modal>
  );
};

// AuthModal.propTypes = {};

// const mapStateToProps = state => ({});

export default AuthModal;
