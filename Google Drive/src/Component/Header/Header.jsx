import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ photoURL }) => {
  return (
    <div className='header'>
      <div className="header__logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Google-Drive-Logo.png" alt="Drive_logo" className='heading-logo' />
        <span>Drive</span>
      </div>
      <div className="header__search">
        <SearchIcon style={{ color: "rgb(68,71,70)" }} />
        <input type="text" placeholder='Search in Drive' />
        <FormatAlignCenterIcon style={{ color: "rgb(68,71,70)" }} />
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon style={{ color: "rgb(68,71,70)" }} />
          <SettingsIcon style={{ color: "rgb(68,71,70)" }} />
        </span>

        <span>
          <AppsIcon style={{ color: "rgb(68,71,70)" }} />
          <div className="account-icon-container">
            {photoURL ? (
              <img 
                src={photoURL} 
                alt="User Profile" 
                className="profile-image"
              />
            ) : (
              <AccountCircleIcon style={{ color: "rgb(68,71,70)" }} sx={{ fontSize: 40 }} />
            )}
            <AccountCircleIcon 
              className="account-icon-overlay" 
              style={{ color: "transparent", fontSize: 40 }}
            />
          </div>
        </span>
      </div>
    </div>
  )
}

export default Header;
