import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
