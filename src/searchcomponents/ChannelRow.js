import { Avatar } from '@mui/material';
import React from 'react';
import './ChannelRow.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image,channel,verified,subs, noOfVideos,description}) {
  return (
    <div className='channelRow'>
        <img
        className='channelRow__logo' 
        src={image} 
        alt={channel} 
        
        />

        <div className="channel__details">
            <h3>{channel} {verified && <CheckCircleIcon/>}</h3>

            <p>{subs} subscribers . {noOfVideos}</p>
            <p>{description}</p>

        </div>
    </div>
  )
}

export default ChannelRow