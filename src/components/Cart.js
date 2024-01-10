import React from 'react';
import { FOOD_URL } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items)
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    // dispatch action to clear the cart 
    dispatch(clearCart())
  }
  return (
    <div 
      className='text-center m-2 p-2'
    >
    <h1 
      className='text-2xl font-bold'
    >Cart</h1>
    <button 
      className='bg-red-800 rounded-lg p-2 text-white hover:bg-opacity-55 hover:text-black'
      onClick={handleClearCart}
    >clear cart</button>
    {
      cartItems.length === 0 
      && <p>cart is empty! Add items to place order</p>
    }
    <ul>
      {
          cartItems?.map((menu)=> 
          <div className='flex p-2'>
          <div className='bg-gray-200 hover:bg-opacity-55'>
              <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - Rs{menu?.card?.info?.price/100}/- </li>
          </div>
          <div className='w-20 h-30 relative'>
              <img 
                  className='screen-full'
                  src={FOOD_URL + menu?.card?.info?.imageId} 
                  alt="food image"
              />
          </div>
          </div>
          )
      }
            </ul>
    </div>
  )
}

export default Cart