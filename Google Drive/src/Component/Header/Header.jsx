import React, { useState } from 'react';
import './Header.css'; // Importing the CSS file for styling the header
import SearchIcon from '@mui/icons-material/Search'; // Importing Material UI icon for search
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'; // Importing Material UI icon for formatting alignment
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Importing Material UI icon for help outline
import SettingsIcon from '@mui/icons-material/Settings'; // Importing Material UI icon for settings
import AppsIcon from '@mui/icons-material/Apps'; // Importing Material UI icon for apps
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Importing Material UI icon for account circle
import { auth } from '../../firebase'; // Importing Firebase authentication from the firebase configuration file
import { signOut } from 'firebase/auth'; // Importing Firebase signOut function

const Header = ({ photoURL }) => {
  // useState hook to manage the visibility of the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle the sign-out process
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out'); // Log success message to the console
        window.location.reload(); // Reload the page to reset the user state
      })
      .catch((error) => {
        console.error('Sign-out error:', error.message); // Log error message to the console
        alert('Failed to sign out. Please try again.'); // Show an alert if sign-out fails
      });
  };

  return (
    <div className='header'>
      {/* Logo section of the header */}
      <div className="header__logo">
        <img 
          src="https://logos-world.net/wp-content/uploads/2020/11/Google-Drive-Logo.png" 
          alt="Drive_logo" 
          className='heading-logo' 
        />
        <span>Drive</span>
      </div>

      {/* Search bar section of the header */}
      <div className="header__search">
        <SearchIcon style={{ color: "rgb(68,71,70)" }} /> {/* Search icon */}
        <input type="text" placeholder='Search in Drive' /> {/* Search input field */}
        <FormatAlignCenterIcon style={{ color: "rgb(68,71,70)" }} /> {/* Format alignment icon */}
      </div>

      {/* Icons and user profile section of the header */}
      <div className="header__icons">
        <span>
          <HelpOutlineIcon style={{ color: "rgb(68,71,70)" }} /> {/* Help icon */}
          <SettingsIcon style={{ color: "rgb(68,71,70)" }} /> {/* Settings icon */}
        </span>
        <span>
          <AppsIcon style={{ color: "rgb(68,71,70)" }} /> {/* Apps icon */}
          <div className="account-icon-container" onClick={toggleDropdown}>
            {photoURL ? (
              // If a photoURL is provided, display the user's profile image
              <img
                src={photoURL}
                alt="User Profile"
                className="profile-image"
              />
            ) : (
              // If no photoURL is provided, display the default account icon
              <AccountCircleIcon style={{ color: "rgb(68,71,70)" }} sx={{ fontSize: 40 }} />
            )}
            {/* Dropdown menu for user actions */}
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleSignOut} className="logout-button">Logout</button> {/* Logout button */}
              </div>
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
