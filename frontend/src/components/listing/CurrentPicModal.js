import './PicModal.css';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
// import Carousel from 'react-bootstrap/Carousel';

const PicModal = props => {
  const [current, setCurrent] = useState(``);

  const cleanUp = () => {
    setCurrent(``);
    document.getElementById('root').classList.remove('blur');
  };

  if (props.currentphoto) {
    document.getElementById('root').classList.add('blur');
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onExit={cleanUp}>
      <Modal.Header closeButton>
        <h4 className='modal-address mr-2'>{props.address}</h4>
        <h5 className='modal-address'>
          {props.city},{props.state} {props.zipcode}
        </h5>
      </Modal.Header>
      <ModalBody>
        <img
          id='large-photo'
          className='img-fluid'
          src={current ? current : props.currentphoto}
          alt='pictures of real estate property'
        />
        <div className='container thumbnail-container mb-4'>
          <div className='row justify-content-center modal-row'>
            {props.photos &&
              props.photos.map(photo => (
                <div key={photo.id} className='col-4 my-3'>
                  <img
                    className='img-fluid thumbnail-img'
                    src={`http://localhost:1337${photo.url}`}
                    alt='pictures of a property'
                    onClick={() =>
                      setCurrent(`http://localhost:1337${photo.url}`)
                    }
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
