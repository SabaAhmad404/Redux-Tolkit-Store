import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import store from './components/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="cart" Component={Cart} />
        </Routes>
      </Provider>
    </div>

  );
}

export default App;
