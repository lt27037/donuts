import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartCounter = () => {
  const cart = useSelector((state) => state.cart);
  let sum = 0;
  let qty = cart.forEach((item) => (sum += item.qty));

  console.log(cart);

  return (
    <Link to="/koszyk">
      <div className="cartCounter">Koszyk {sum}</div>
    </Link>
  );
};

export default CartCounter;
