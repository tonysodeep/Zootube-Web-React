import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './VideoItem.css';

const VideoItem = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideoHandler = () => setShowVideo(true);

  const closeVideoHandler = () => setShowVideo(false);
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
      <li className="video-item">
        <Card className="video-item__content">
          <div className="video-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="video-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="video-item__actions">
            <Button to={`/${props.creatorId}/videos`}>{props.userName}</Button>
            <Button inverse onClick={openVideoHandler}>
              Watch Video
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default VideoItem;
