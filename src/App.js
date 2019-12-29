import React from 'react';
import './App.css';
import { Home } from './routes/Home/Home.js';
import { Navbar } from './common/Navbar.js';

function App() {
  return (
    <div className="app-container">
      <nav>
        <Navbar />
      </nav>
      <div className="center-column background-margin">
        <section className="main-container rounded">
          <Home />
        </section>   
      </div>
    </div>
  );
}

export default App;