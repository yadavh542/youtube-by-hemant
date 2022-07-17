import { Avatar } from '@mui/material';
import React from 'react';
import './VideoRow.css';

function VideoRow({image, title, views, subs, channel, timestamp, description, channelIcon}) {
  return (
    <div className="videoRow">
        <img src={image} alt={title} />
        <div className="channel__details">
            <h3>{title}</h3>
            <p>{views} views . {timestamp}</p>
            <div className="channel__name">
                <Avatar src={channelIcon}/>
                <h4>{channel}</h4>
            </div>
            <p><span className='channel__subs'>{subs}</span> Subscribers</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow