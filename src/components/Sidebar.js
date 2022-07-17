import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarSub from './SidebarSub';
import {auth , provider} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";


function Sidebar() {
  const [user] = useAuthState(auth);

  return (
    <div className="sidebar">
        <SidebarRow selected Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={ExploreIcon} title="Explore"/>
        <SidebarRow Icon={WhatshotIcon } title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon } title="Subscription"/>
        <hr />
        <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow  Icon={HistoryIcon} title="History"/>
        <SidebarRow  Icon={SlideshowIcon} title="Your Videos"/>
        <SidebarRow  Icon={AccessTimeIcon} title="Watch Later"/>
        <SidebarRow  Icon={ContentCutIcon} title="Your Clips"/>
        <SidebarRow  Icon={KeyboardArrowDownIcon} title="Show More"/>
        <hr />
        { user? 
        ( <>
        <h4>SUBSCRIPTIONS</h4>

        <SidebarSub channelImg="https://static.indiatvnews.com/ins-web/images/IndiaTV_500x500.png" channelName="India TV"/>
        <SidebarSub channelImg="https://www.exchange4media.com/news-photo/104726-image.jpg" channelName="Zee News"/>
        <SidebarSub channelImg="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/7b/44/eb/7b44eb61-f782-4f04-08a0-1daa00775c8c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png" channelName="Aaj Tak"/>
        <SidebarSub channelImg="https://upload.wikimedia.org/wikipedia/en/e/ed/NDTV_India.png" channelName="NDTV News"/>
        <SidebarSub channelImg="https://upload.wikimedia.org/wikipedia/commons/e/e9/DD_News.png" channelName="DD News"/>
        <SidebarSub channelImg="https://corporate.discovery.com/wp-content/uploads/2021/10/DISCOVERY-PLUS-VERTICAL-PRIMARY-pos-rgb-small2.png" channelName="Discovery"/>
        <SidebarSub channelImg="https://www.clipartmax.com/png/middle/473-4734937_90s-png-old-nick-logo-png.png" channelName="Nick"/></>
        ): null}
    </div>
  )
}

export default Sidebar