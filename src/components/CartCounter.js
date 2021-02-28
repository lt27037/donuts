import React from 'react';
import { useSelector } from 'react-redux';

const CartCounter = () => {

   const cart = useSelector(state => state.cart);

   return (
      <div className="cartCounter">
         Koszyk {cart?.length}
      </div>
   );
};

export default CartCounter;
