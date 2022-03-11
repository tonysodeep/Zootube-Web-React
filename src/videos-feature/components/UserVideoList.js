import React from 'react';
import Button from '../../shared/components/FormElements/Button';

import Card from '../../shared/components/UIElements/Card';
import UserVideoItem from './UserVideoItem';
import Avatar from '../../shared/components/UIElements/Avatar';

import './VideoList.css';

const UserVideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="video-list center">
        <Card>
          <h2>No video found. Maybe create one?</h2>
          <Button to="/video/new">Share Video</Button>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Card className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.userInfo.imageUrl} alt={props.userInfo.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.userInfo.name}</h2>
          <h3>
            {props.items.length}
            {props.items.length === 1 ? 'Video' : 'Videos'}
          </h3>
        </div>
      </Card>
      <ul className="video-list">
        {props.items.map((video) => (
          <UserVideoItem
            key={video.id}
            id={video.id}
            image={video.resource.imageUrl}
            title={video.title}
            video={video.resource.videoUrl}
            description={video.description}
            creatorId={video.creator}
            onDelete={props.onDeleteVideo}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UserVideoList;
