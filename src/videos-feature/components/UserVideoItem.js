import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './VideoItem.css';

const UserVideoItem = (props) => {
  return (
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
          <Button inverse>Watch Video</Button>
          <Button to={`/videos/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default UserVideoItem;
