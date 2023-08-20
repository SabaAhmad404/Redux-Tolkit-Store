import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <>
      <nav className="nav-bar">
        <h1>Shopping Cart</h1>
        <div className="nav-container">
          <ul><Link className="Home" to="/">Home</Link></ul>
          <ul><Link className="cart" to="cart">Cart</Link></ul>
          <ul className="cart-items">cart items: 0</ul>
        </div>
      </nav>

    </>
  );
}
