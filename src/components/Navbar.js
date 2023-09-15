import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const item=useSelector((state)=>state.cart);
  return (

    <>
      <nav className="nav-bar">
        <h1>Shopping Cart</h1>
        <div className="nav-container">
          <ul><Link className="Home" to="/">Home</Link></ul>
          <ul><Link className="cart" to="cart">Cart</Link></ul>
          <ul className="cart-items">cart items: {item.length}</ul>
        </div>
      </nav>

    </>
  );
}
