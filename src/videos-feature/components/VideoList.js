import React from 'react';

import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (
    <ul className="video-list">
      {props.items.map((video) => (
        <VideoItem
          key={video.id}
          id={video.id}
          image={video.resources.thumbnailUrl}
          title={video.title}
          video={video.resources.videoUrl}
          description={video.description}
          creatorId={video.creator}
          userName={video.userName}
        />
      ))}
    </ul>
  );
};
export default VideoList;
