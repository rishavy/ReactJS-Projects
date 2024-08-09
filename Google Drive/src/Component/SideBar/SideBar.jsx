import React, { useState } from "react";
import "./SideBar.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudIcon from "@mui/icons-material/Cloud";
import { Modal } from "@mui/material";
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!file) return;

    setUploading(true);

    const storageRef = ref(storage, `files/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, "myfiles"), {
        timestamp: serverTimestamp(),
        filename: file.name,
        fileURL: downloadURL,
        size: snapshot.metadata.size,
      });

      setUploading(false);
      setFile(null);
      setOpen(false);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Select File You Want To Upload</h3>
            </div>

            <div className="modalBody">
              {uploading ? (
                <p className="uploading">Uploading....!</p>
              ) : (
                <>
                  <input type="file" className="file" onChange={handleChange} />
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
      <div className="sidebar">
        <div className="sidebar_btn">
          <button onClick={handleOpen} className="plus-btn">
            <img
              src="https://wellesleyps.org/technology/wp-content/uploads/sites/21/2018/05/Screen-Shot-2018-05-21-at-9.30.30-AM.png"
              alt="add-btn" className="add-btn"
            />
            <span>New</span>
          </button>
        </div>

        <div className="sidebar_options">
          <div className="sidebar_option sidebar_option-Active ">
            <MobileScreenShareIcon />
            <span>My Drive</span>
          </div>
          <div className="sidebar_option">
            <DevicesIcon />
            <span>Computers</span>
          </div>
          <div className="sidebar_option">
            <PeopleAltIcon />
            <span>Share with me</span>
          </div>
          <div className="sidebar_option">
            <QueryBuilderIcon />
            <span>Recent</span>
          </div>
          <div className="sidebar_option">
            <StarBorderIcon />
            <span>Starred</span>
          </div>
          <div className="sidebar_option">
            <DeleteOutlineIcon />
            <span>Trash</span>
          </div>
        </div>

        <hr />

        <div className="sidebar-options">
          <div className="sidebar_option">
            <CloudIcon />
            <span>Storage</span>
          </div>
          <div className="progress_bar">
            <progress size="tiny" value="50" max="100" />
            <br />
            <span>6.45 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
