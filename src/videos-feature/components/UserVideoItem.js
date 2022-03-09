import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './VideoItem.css';

const UserVideoItem = (props) => {
  const [showVideo, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openVideoHandler = () => setShowMap(true);

  const closeVideoHandler = () => setShowMap(false);

  const showDeleteWaringHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('deling');
  };
  return (
    <React.Fragment>
      <Modal
        show={showVideo}
        onCancel={closeVideoHandler}
        header={props.title}
        contentClass="video-item__modal-content"
        footerClass="video-item__modal-action"
        footer={<Button onClick={closeVideoHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>The Video!!</h2>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure"
        footerClass="video-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to process and delete this place</p>
      </Modal>
      <li className="video-item">
        <Card className="video-item__content">
          <div className="video-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="video-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="video-item__actions">
            <Button inverse onClick={openVideoHandler}>
              Watch Video
            </Button>
            <Button to={`/video/${props.id}`}>Edit</Button>
            <Button danger onClick={showDeleteWaringHandler}>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default UserVideoItem;
