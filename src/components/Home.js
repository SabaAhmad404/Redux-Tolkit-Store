import React from 'react';
import Products from './Products';

export default function Home() {
  return (
    <>
      <div className="shopping-cart">
        <h2> Welcome! To The Shopping cart</h2>
        <h3>Products</h3>
      </div>
      <Products />
    </>

  );
}
