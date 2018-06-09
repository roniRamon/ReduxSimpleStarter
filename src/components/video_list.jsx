import React from 'react';
import VideoListItem from './video_list_item.jsx';

const VideoList = (props) => {
  return (
    <div>
      <ul className="col-md-4 list-group">
        {
          props.videos.map(video => (
            <VideoListItem
              video={video}
              key={video.etag} />
          ))
        }
      </ul>
    </div>
  );
};

export default VideoList;
