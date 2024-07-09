// Import necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
