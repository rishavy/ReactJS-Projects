// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoNHWFz3kxuLdhSCGULvpQkzfHKAXMJ3U",
  authDomain: "drive-fbcbd.firebaseapp.com",
  projectId: "drive-fbcbd",
  storageBucket: "drive-fbcbd.appspot.com",
  messagingSenderId: "144272081272",
  appId: "1:144272081272:web:ca7146c6f52ce0fa32888d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
