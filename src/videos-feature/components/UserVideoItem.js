import React, { useContext, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import VideoPlayer from '../../shared/components/UIElements/VideoPlayer';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './VideoItem.css';

const UserVideoItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const auth = useContext(AuthContext);

  const [showVideo, setShowVideo] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openVideoHandler = () => setShowVideo(true);

  const closeVideoHandler = () => setShowVideo(false);

  const showDeleteWaringHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5069/api/videos/${props.id}`,
        'DELETE',
        null,
        {
          Authorization: 'Bearer ' + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
    setShowConfirmModal(false);
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
        <p>Do you want to process and delete this video</p>
      </Modal>
      <li className="video-item">
        <Card className="video-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="video-item__image">
            <img src={`${props.image}`} alt={props.title} />
          </div>
          <div className="video-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="video-item__actions">
            <Button inverse onClick={openVideoHandler}>
              Watch Video
            </Button>
            {props.creatorId === auth.userId && (
              <>
                {' '}
                <Button to={`/video/${props.id}`}>Edit</Button>
                <Button danger onClick={showDeleteWaringHandler}>
                  Delete
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default UserVideoItem;
