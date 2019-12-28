import React from 'react';
import './App.css';
import { Home } from './routes/Home/Home.js';
import { Navbar } from './common/Navbar.js';

function App() {
  return (
    <div className="app-container">
      <div className="center-column background-margin">
        <div className="main-container rounded">
          <Home />
        </div>   
      </div>
    </div>
  );
}

export default App;