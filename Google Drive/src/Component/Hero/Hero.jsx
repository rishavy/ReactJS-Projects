import React, { useEffect, useState } from 'react';
import './Hero.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Hero = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'myfiles'), (snapshot) => {
      setFiles(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  return (
    <div className='data'>
      <div className='data__header'>
        <div className='data__headerLeft'>
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className='data__headerRight'>
          <ListIcon />
          <InfoIcon />
        </div>
      </div>

      <div className='data__content'>
        <div className='data_grid'>
          {files.map((file) => (
            <div key={file.id} className='data__file'>
              <InsertDriveFileIcon />
              <p>
              <a href={file.data.fileURL} target='_blank' >
                 {file.data.filename}
                 </a>
              </p>
            </div>
          ))}
        </div>

        <div className='data_list'>
          <div className='detailsRow headings'>
            <p> Name <ArrowDownwardIcon /></p>
            <p>Owner</p>
            <p>Last Modified</p>
            <p>File Size</p>
          </div>

          {files.map((file) => (
            <div key={file.id} className='detailsRow'>
              <p className='insert-device'>
                <a href={file.data.fileURL} target='_blank'>
                 <InsertDriveFileIcon /> {file.data.filename}
                 </a>
                 </p>
              <p className='owner'>Me</p>
              <p className='last-modified'>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
              <p>{formatBytes(file.data.size)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
