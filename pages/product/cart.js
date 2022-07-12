import React, { useContext } from 'react'
import Link from 'next/link'

import { RemoveShoppingCartOutlined } from '@material-ui/icons';

import { Context } from '../../components/context/StateContext';


import CartProducts from '../../components/CartProducts';



const cart = () => {

  const { cartItems, totalPrice } = useContext(Context);
    

  return (
    <div className='cartPage'>
      {console.log(cartItems)}
          {cartItems.length < 1 && (
            <div className='empty'>
              <RemoveShoppingCartOutlined className='icon' style={{fontSize: 200, color: 'rgb(211, 72, 72)'}}/>
              <h1 style={{fontSize: 40, color: 'rgb(211, 72, 72)'}} >Empty cart</h1>
              <Link href='/'>Go shopping</Link>
            </div>
          )}
          {cartItems.length >= 1 && (
          <>  
            <div className='left'>
            {cartItems?.map(item =>
              <CartProducts key={item._id} cart={item}/>
            )}              
            </div>
            <div className='right'>
              <h1>check Order</h1>
              <div className='price'>
                <span>price</span>
                <span>RUB {totalPrice}</span>
              </div>
              <div className='order'>
                <span>Order</span>
                <span>RUB {totalPrice}</span>
              </div>
              <a href="">Pay</a>
            </div>
          </>  
          )}

          
    
    </div>
  )
}

export default cart;