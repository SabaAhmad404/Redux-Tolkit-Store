import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images} alt="product-images" />
            <h2>{product.title}</h2>
            <h4>{product.price}</h4>
            <button type="button">add to cart</button>
          </div>
        ))}

      </div>
    </>
  );
}
