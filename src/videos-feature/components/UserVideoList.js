import React from 'react';
import Button from '../../shared/components/FormElements/Button';

import Card from '../../shared/components/UIElements/Card';
import UserVideoItem from './UserVideoItem';

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
    <ul className="video-list">
      {props.items.map((video) => (
        <UserVideoItem
          key={video.id}
          id={video.id}
          image={video.resources.thumbnailUrl}
          title={video.title}
          video={video.resources.videoUrl}
          description={video.description}
          creatorId={video.creator}
        />
      ))}
    </ul>
  );
};

export default UserVideoList;
