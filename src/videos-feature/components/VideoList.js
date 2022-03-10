import React from 'react';

import './VideoList.css';
import VideoItem from './VideoItem';
import Card from '../../shared/components/UIElements/Card';

const VideoList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="video-list center">
        <Card>
          <h2>Our website just upload there no video in the main page</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="video-list">
      {props.items.map((video) => (
        <VideoItem
          key={video.id}
          id={video.id}
          image={video.resource.imageUrl}
          title={video.title}
          video={video.resource.videoUrl}
          description={video.description}
          creatorName={video.creator.username}
          creatorId = {video.creator.id}
        />
      ))}
    </ul>
  );
};
export default VideoList;
