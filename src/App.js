import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
         <Route exact path="/" Component={Home}/>
         <Route path="cart" Component={Cart}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
