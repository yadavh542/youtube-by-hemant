import React from 'react';
import './SidebarSub.css';
import { Avatar } from '@mui/material';

function SidebarSub({channelName,channelImg}) {
  return (
    <div className="sidebarSub">
        <Avatar
        alt="Remy Sharp"
        className='channelAvatar'
        src={channelImg}
        sx={{ width: 24, height: 24 }}
        />
        <h3 className='sidebarSubChannelName'>{channelName}</h3>
    </div>
  )
}

export default SidebarSub