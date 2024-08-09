import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Header = ({ photoURL }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        window.location.reload(); // Reload the page to reset the user state
      })
      .catch((error) => {
        console.error('Sign-out error:', error.message);
        alert('Failed to sign out. Please try again.');
      });
  };

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
          <div className="account-icon-container" onClick={toggleDropdown}>
            {photoURL ? (
              <img
                src={photoURL}
                alt="User Profile"
                className="profile-image"
              />
            ) : (
              <AccountCircleIcon style={{ color: "rgb(68,71,70)" }} sx={{ fontSize: 40 }} />
            )}
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleSignOut} className="logout-button">Logout</button>
              </div>
            )}
          </div>
        </span>a
      </div>
    </div>
  )
}

export default Header;
