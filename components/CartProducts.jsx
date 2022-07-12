import React, { useContext } from 'react'
import { Context } from './context/StateContext';

import { DeleteOutlined, AddOutlined, RemoveOutlined } from "@material-ui/icons";

import { urlFor } from "../lib/client";


const CartProducts = ({cart}) => {

  const { image, price, name, details } = cart;

  const { increaseCart, decreaseCart, deleteCart } = useContext(Context);

  return (
    <div className="left_cart">
    {console.log(cart)}
      <img src={urlFor(image)} alt=""/>
      <div className='cart_details_middle'>
        <span>{name}</span>
        <span>{details}</span>
        <span>RUB {price}</span>
      </div>
      <div className='cart_details_right'>
        <DeleteOutlined onClick={() => deleteCart(cart)}  className='icons'/>
        <div className='cart_details_right_buttom'>
          <RemoveOutlined onClick={() => decreaseCart(cart)} className='icons'/>
          <span>{cart.quantity}</span>
          <AddOutlined onClick={() => increaseCart(cart)} className='icons'/>
        </div>
      </div>
    </div>
  )
}

export default CartProducts;