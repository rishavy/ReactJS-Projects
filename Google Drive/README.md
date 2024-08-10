# Google Drive

This project is a Google Drive built using ReactJS. It leverages Firebase for authentication, storage, and database services. The UI is crafted with Material-UI icons and custom CSS.

## Features

- **Google Authentication**: Users can log in using their Google accounts.
- **File Upload**: Users can upload files to Firebase Storage, which are then listed in the UI.
- **File Display**: Uploaded files are displayed with details such as filename, owner, last modified date, and file size.
- **Responsive Design**: The UI is responsive, ensuring a good user experience across devices.

## Project Structure

The project is organized into the following main components:

- **App.jsx**: The root component that handles user authentication and conditionally renders components based on the user's login status.
- **Header.jsx**: Displays the header of the application, including the Google Drive logo, search bar, and user profile.
- **SideBar.jsx**: Provides navigation options and allows users to upload new files.
- **Hero.jsx**: Displays the main content area, including the list of uploaded files.

## Technologies Used

- **ReactJS**: Frontend framework.
- **Firebase**: 
  - **Authentication**: Google Sign-In authentication.
  - **Firestore**: Storing metadata about uploaded files.
  - **Storage**: Storing the uploaded files.
- **Material-UI**: Icons for the user interface.
- **CSS**: Custom styling for components.


### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **Firebase Project**: Set up a Firebase project and obtain the necessary configuration details.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishavy/ReactJS-Projects/tree/main/Google%20Drive?authuser=1



[Hosted Link...](https://66b71eb56801eeffb544e25e--reactjsprojects.netlify.app/)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
