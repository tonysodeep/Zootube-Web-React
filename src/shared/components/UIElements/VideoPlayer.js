import React from 'react';
import ReactPlayer from 'react-player';

import './VideoPlayer.css';

const VideoPlayer = (props) => {
  return (
    <div className={`video ${props.className}`} style={props.style}>
      <ReactPlayer width="100%" height="100%" controls url={props.videoUrl} />
    </div>
  );
};

export default VideoPlayer;
