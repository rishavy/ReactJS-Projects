import React, { useState } from 'react';
import Header from './Component/Header/Header';
import SideBar from './Component/SideBar/SideBar';
import Hero from './Component/Hero/Hero';
import './App.css';
import './index.css';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in error:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className='App'>
            <SideBar />
            <Hero />
          </div>
        </>
      ) : (
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
            Login to Google Drive Clone
          </button>
        </div>
      )}
    </>
  );
};

export default App;
