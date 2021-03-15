import React from 'react';
import { useSelector } from 'react-redux';

const CartCounter = () => {

   const cart = useSelector(state => state.cart);
   let sum = 0;
   let qty = cart.forEach(item =>  sum += item.qty)

   return (
      <div className="cartCounter">
         Koszyk {cart?.length}
      </div>
   );
};

export default CartCounter;
