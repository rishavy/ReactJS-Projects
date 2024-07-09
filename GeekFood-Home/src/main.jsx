// Import necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import MidBody from './components/MidBody';
import Cards from './components/Cards';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <MidBody />
      <Cards />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
