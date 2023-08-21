import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';
export default function Products() {
  const dispatch=useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);


    const handleAdd=(pro)=>{
         dispatch(add(pro));
    }
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
             <img src={product.images} alt="product-images" />
            <h2>{product.title}</h2>
            <h4>{product.price}</h4>
            <button onClick={()=>handleAdd(product)} type='button'>add to cart</button>
          </div>
        ))}

      </div>
    </>
  );
}
