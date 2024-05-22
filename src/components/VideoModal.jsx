import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
function VideoPlayer() {
    const {video} = useParams();
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={video}
        className="react-player"
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;
