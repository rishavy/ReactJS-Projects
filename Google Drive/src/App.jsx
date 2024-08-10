import React, { useState } from 'react';
import Header from './Component/Header/Header'; // Importing the Header component
import SideBar from './Component/SideBar/SideBar'; // Importing the SideBar component
import Hero from './Component/Hero/Hero'; // Importing the Hero component
import './App.css'; // Importing CSS file for App component styling
import './index.css'; // Importing global CSS file for additional styling
import { auth, provider } from './firebase'; // Importing Firebase authentication and provider
import { signInWithPopup } from 'firebase/auth'; // Importing Firebase function to handle popup sign-in

const App = () => {
  // useState hook to manage the user's authentication state
  const [user, setUser] = useState(null);

  // Function to handle user sign-in using Firebase Authentication with Google provider
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // Trigger Google sign-in popup
      setUser(result.user); // Set the authenticated user in the state
    } catch (error) {
      console.error("Sign-in error:", error.message); // Log any errors that occur during sign-in
      alert("Failed to sign in. Please try again."); // Display an error message to the user
    }
  };

  return (
    <>
      {/* Check if the user is authenticated */}
      {user ? (
        <>
          {/* If authenticated, render the main application components */}
          <Header photoURL={user.photoURL} /> {/* Pass user's photo URL to the Header component */}
          <div className='App'>
            <SideBar /> {/* Render the SideBar component */}
            <Hero /> {/* Render the Hero component */}
          </div>
        </>
      ) : (
        {/* If not authenticated, render the login screen */}
        <div className='loginWrap'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_Drive_-_New_Logo.png'
            alt='Google Drive Logo'
            className='login-image'
          />
          <button
            onClick={signIn}
            className='login-button'
          >
            Login to Google Drive
          </button>
        </div>
      )}
    </>
  );
};

export default App;
