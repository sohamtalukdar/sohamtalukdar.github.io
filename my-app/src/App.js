// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';          // Global CSS import
import Header from './Header';
import MainContent from './MainContent';
import Readings from './Readings';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/readings" element={<Readings />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

