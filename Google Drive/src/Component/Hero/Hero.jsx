import React, { useEffect, useState } from 'react';
import './Hero.css'; // Importing the CSS file for styling the Hero component
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Importing Material UI icon for dropdown arrow
import ListIcon from '@mui/icons-material/List'; // Importing Material UI icon for list
import InfoIcon from '@mui/icons-material/Info'; // Importing Material UI icon for information
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Importing Material UI icon for file icon
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Importing Material UI icon for downward arrow
import { db } from '../../firebase'; // Importing Firestore database instance from firebase configuration file
import { collection, onSnapshot } from 'firebase/firestore'; // Importing Firestore functions for real-time data fetching

const Hero = () => {
  // useState hook to manage the state of files retrieved from Firestore
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Setting up a real-time listener to fetch data from the 'myfiles' collection in Firestore
    const unsubscribe = onSnapshot(collection(db, 'myfiles'), (snapshot) => {
      setFiles(snapshot.docs.map((doc) => ({
        id: doc.id, // Document ID
        data: doc.data(), // Document data
      })));
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  // Function to format file sizes in a human-readable format (e.g., Bytes, KB, MB)
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes'; // Return '0 Bytes' if the size is 0

    const k = 1024; // Define the conversion factor (1 KB = 1024 Bytes)
    const dm = decimals < 0 ? 0 : decimals; // Set the number of decimal places
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; // Array of size units

    const i = Math.floor(Math.log(bytes) / Math.log(k)); // Determine the appropriate size unit

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]; // Return the formatted size
  }

  return (
    <div className='data'>
      {/* Header section of the Hero component */}
      <div className='data__header'>
        <div className='data__headerLeft'>
          <p>My Drive</p>
          <ArrowDropDownIcon /> {/* Dropdown icon */}
        </div>
        <div className='data__headerRight'>
          <ListIcon /> {/* List view icon */}
          <InfoIcon /> {/* Info icon */}
        </div>
      </div>

      {/* Content section of the Hero component */}
      <div className='data__content'>
        {/* Grid view for displaying files */}
        <div className='data_grid'>
          {files.map((file) => (
            <div key={file.id} className='data__file'>
              <InsertDriveFileIcon /> {/* File icon */}
              <p>
                {/* File name as a clickable link that opens the file in a new tab */}
                <a href={file.data.fileURL} target='_blank' rel='noopener noreferrer'>
                  {file.data.filename}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* List view for displaying file details */}
        <div className='data_list'>
          {/* Headings for the list view */}
          <div className='detailsRow headings'>
            <p> Name <ArrowDownwardIcon /></p> {/* Name column with a downward arrow for sorting */}
            <p>Owner</p> {/* Owner column */}
            <p>Last Modified</p> {/* Last modified date column */}
            <p>File Size</p> {/* File size column */}
          </div>

          {/* Rows displaying the details of each file */}
          {files.map((file) => (
            <div key={file.id} className='detailsRow'>
              <p className='insert-device'>
                {/* File name with an icon, clickable to open the file in a new tab */}
                <a href={file.data.fileURL} target='_blank' rel='noopener noreferrer'>
                  <InsertDriveFileIcon /> {file.data.filename}
                </a>
              </p>
              <p className='owner'>Me</p> {/* Owner of the file (static text 'Me') */}
              <p className='last-modified'>
                {/* Last modified timestamp converted to a readable date string */}
                {new Date(file.data.timestamp?.seconds * 1000).toUTCString()}
              </p>
              <p>{formatBytes(file.data.size)}</p> {/* Formatted file size */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
