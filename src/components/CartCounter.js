import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../images/shopping-cart-solid (1).svg";

const CartCounter = () => {
  const cart = useSelector((state) => state.cart);
  let sum = 0;
  cart.forEach((product) => (sum += product.qty));

  console.log(cart);

  return (
    <Link to="/koszyk">
      <div className="cartCounter">
        <CartIcon className="cartCounter__icon" />
        <span className="cartCounter__number">{sum}</span>
      </div>
    </Link>
  );
};

export default CartCounter;
