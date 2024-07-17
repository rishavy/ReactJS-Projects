import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResApp from './components/Restaurant/ResApp';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ResApp />
      <Footer />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
