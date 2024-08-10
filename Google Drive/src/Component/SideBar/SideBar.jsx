import React, { useState } from "react";
import "./SideBar.css"; // Importing the CSS file for styling the SideBar component
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare"; // Importing Material UI icon for My Drive
import DevicesIcon from "@mui/icons-material/Devices"; // Importing Material UI icon for Computers
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"; // Importing Material UI icon for Share with me
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"; // Importing Material UI icon for Recent
import StarBorderIcon from "@mui/icons-material/StarBorder"; // Importing Material UI icon for Starred
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Importing Material UI icon for Trash
import CloudIcon from "@mui/icons-material/Cloud"; // Importing Material UI icon for Storage
import { Modal } from "@mui/material"; // Importing Modal component from Material UI
import { db, storage } from "../../firebase"; // Importing Firestore and Storage instances from firebase configuration file
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importing functions to interact with Firebase Storage
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Importing Firestore functions to add documents and manage timestamps

const SideBar = () => {
  // useState hook to manage the state of the modal (open/close)
  const [open, setOpen] = useState(false);
  // useState hook to manage the state of the uploading process
  const [uploading, setUploading] = useState(false);
  // useState hook to manage the selected file to be uploaded
  const [file, setFile] = useState(null);

  // Function to handle the closing of the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle the opening of the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle file selection from the file input
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]); // Set the selected file to state
    }
  };

  // Function to handle file upload to Firebase Storage and adding the file info to Firestore
  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!file) return; // If no file is selected, do nothing

    setUploading(true); // Set uploading state to true

    const storageRef = ref(storage, `files/${file.name}`); // Reference to the file in Firebase Storage
    try {
      const snapshot = await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
      const downloadURL = await getDownloadURL(snapshot.ref); // Get the download URL of the uploaded file

      // Add the file info to Firestore
      await addDoc(collection(db, "myfiles"), {
        timestamp: serverTimestamp(), // Store the current server timestamp
        filename: file.name, // Store the file name
        fileURL: downloadURL, // Store the download URL
        size: snapshot.metadata.size, // Store the file size
      });

      setUploading(false); // Set uploading state to false after upload is complete
      setFile(null); // Reset the file state to null
      setOpen(false); // Close the modal
    } catch (error) {
      console.error("Upload failed:", error); // Log any errors that occur during the upload
      setUploading(false); // Set uploading state to false if an error occurs
    }
  };

  return (
    <>
      {/* Modal for file upload */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Select File You Want To Upload</h3> {/* Modal heading */}
            </div>

            <div className="modalBody">
              {/* Display uploading message during file upload */}
              {uploading ? (
                <p className="uploading">Uploading....!</p>
              ) : (
                <>
                  {/* File input field */}
                  <input type="file" className="file" onChange={handleChange} />
                  {/* Submit button to trigger file upload */}
                  <input
                    type="submit"
                    className="post_submit"
                    onClick={handleUpload}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>

      {/* Sidebar container */}
      <div className="sidebar">
        <div className="sidebar_btn">
          {/* Button to open the file upload modal */}
          <button onClick={handleOpen} className="plus-btn">
            <img
              src="https://wellesleyps.org/technology/wp-content/uploads/sites/21/2018/05/Screen-Shot-2018-05-21-at-9.30.30-AM.png"
              alt="add-btn"
              className="add-btn"
            />
            <span>New</span>
          </button>
        </div>

        {/* Sidebar options */}
        <div className="sidebar_options">
          {/* My Drive option */}
          <div className="sidebar_option sidebar_option-Active">
            <MobileScreenShareIcon />
            <span>My Drive</span>
          </div>
          {/* Computers option */}
          <div className="sidebar_option">
            <DevicesIcon />
            <span>Computers</span>
          </div>
          {/* Share with me option */}
          <div className="sidebar_option">
            <PeopleAltIcon />
            <span>Share with me</span>
          </div>
          {/* Recent option */}
          <div className="sidebar_option">
            <QueryBuilderIcon />
            <span>Recent</span>
          </div>
          {/* Starred option */}
          <div className="sidebar_option">
            <StarBorderIcon />
            <span>Starred</span>
          </div>
          {/* Trash option */}
          <div className="sidebar_option">
            <DeleteOutlineIcon />
            <span>Trash</span>
          </div>
        </div>

        <hr /> {/* Horizontal line divider */}

        {/* Storage information */}
        <div className="sidebar-options">
          {/* Storage option */}
          <div className="sidebar_option">
            <CloudIcon />
            <span>Storage</span>
          </div>
          {/* Progress bar indicating storage usage */}
          <div className="progress_bar">
            <progress size="tiny" value="50" max="100" />
            <br />
            <span>7.15 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
