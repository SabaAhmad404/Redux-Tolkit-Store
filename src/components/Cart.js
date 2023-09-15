import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from './store/cartSlice';

export default function Cart() {
  const dispatch=useDispatch()
  const cartItem=useSelector((state)=>state.cart)
  const handleRemove=(s)=>{
       dispatch(remove(s));
  }
  return (
    <>
       {cartItem.map((product)=>(
         <div className='cart-card' key={product.id}>
          <img src={product.images}/>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <button className='btn'onClick={()=>handleRemove(product.id)}>Remove</button>
         </div>
       ))}

    </>

  );
}
