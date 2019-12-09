import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';

const PicModal = props => {
  console.log(props);
  return (
    <Modal
      //   show={show}
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton></Modal.Header>
      <ModalBody>
        <img
          className='img-fluid'
          src={props.currentphoto}
          alt='pictures of real estate property'
        />
        <div className='container thumbnail-container mb-4'>
          <div className='row justify-content-center'>
            {props.photos &&
              props.photos.map(photo => (
                <div key={photo.id} className='col-6 my-3'>
                  <img
                    className='img-fluid thumbnail-img'
                    src={`http://localhost:1337${photo.url}`}
                    alt='pictures of a property'
                  />
                </div>
              ))}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PicModal;
