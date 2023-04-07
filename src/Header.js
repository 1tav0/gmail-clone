import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout())
            })
    }

  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
              </IconButton>
              <img src='https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png'
                  alt=''
              />

        </div>
        <div className='header__middle'>
            <SearchIcon />
              <input placeholder='Search mail' type='text'></input>
              <ArrowDropDownIcon className='header__inputCaret'/>
        </div>
        <div className='header__right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
              <Avatar src={ user?.photoUrl } onClick={signOut} />
        </div>
        
    </div>
  )
}

export default Header