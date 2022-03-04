import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserVideoItem from './UserVideoItem';

import './VideoList.css';

const UserVideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="video-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
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
          description={video.description}
          creatorId={video.creator}
        />
      ))}
    </ul>
  );
};

export default UserVideoList;
