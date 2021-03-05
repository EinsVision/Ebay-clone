import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
