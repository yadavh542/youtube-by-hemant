import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton, Button, Box } from '@mui/material';
import "./Header.css";
import {auth , provider} from "../firebase";
import { signInWithPopup} from "firebase/auth";
import {  signOut } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const [inputSearch, setInputSearch] = useState('');

  function expand(){
    setShow(true);
  }

  function close(){
    setShow(false);
  }

  const signIn = ()=>{
    signInWithPopup(auth,provider).catch(alert);
};

const logout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};

  return (
    <div className="header" >
        
        <div className="header__left" >
            <MenuIcon sx={{cursor: 'pointer'}}/>  
            <Link to="/"> 
            <img className="header__logo" src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" alt="" /> 
            </Link>
        </div>
        
        <div className="header__empty" onClick={close}><Box></Box></div>

        <div className="header__middle"> 
        <div className="header__input">

            { show ? ( 
            <Box 
            sx={{ bgcolor: 'white'}}>
              <SearchIcon sx={{mt:0.5,pl:1.5,color: 'gray'}}/>
            </Box> ) : null
            }

            <input 
            onChange={e=> setInputSearch(e.target.value)} 
            value={inputSearch} 
            onClick={expand} 
            type="text" 
            placeholder='Search'/>

            <Link to={`/search/${inputSearch}`}>
            <Button sx={{
                  width: 50 ,
                  bgcolor: 'whitesmoke',
                  
              }}>
              <SearchIcon sx={{color: 'gray'}}/>
            </Button> </Link>
           
        </div>
        <IconButton sx={{bgcolor: 'whitesmoke',ml:0.5}}><MicIcon/> </IconButton>
        
        </div>
        
        <div className="header__empty" onClick={close}></div>

        <div className="header__right">
            <VideoCallIcon className='header__right_icons' sx={{mr:2.5}}/>
            <AppsIcon className='header__right_icons' sx={{mr:2.5}}/>
            <NotificationsIcon className='header__right_icons' sx={{mr:2.5}}/>
            
            {user ? (<Avatar 
             onClick={logout}
             src={user.photoURL}
            className='header__right_icons' />) :
            (<Button variant="outlined" onClick={signIn} className='signIn__button'>LOGIN</Button>)
          }

        </div>
        
    </div>
  )
}

export default Header