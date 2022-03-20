import React, { useContext, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './VideoItem.css';
import { AuthContext } from '../../shared/context/auth-context';
import VideoPlayer from '../../shared/components/UIElements/VideoPlayer';

const VideoItem = (props) => {
  const auth = useContext(AuthContext);

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
          <VideoPlayer videoUrl={props.video} />
        </div>
      </Modal>
      <li className="video-item">
        <Card className="video-item__content">
          <div className="video-item__image">
            <img src={`${props.image}`} alt={props.title} />
          </div>
          <div className="video-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="video-item__actions">
            <Button
              to={auth.isLoggedIn ? `/videos/${props.creatorId}` : '/auth'}
            >
              {props.creatorName}
            </Button>
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
