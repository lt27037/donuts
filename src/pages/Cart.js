import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartProduct from "../components/CartProduct";
import CartSummary from "../components/CartSummary";

import "../styles/Cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const items = cart?.map((product) => <CartProduct product={product} />);

  const isEmpty = (
    <div className="cart__products__isEmpty">
      Twój koszyk jest pusty.
      <Link to="/produkty">Zobacz nasze produkty</Link>
    </div>
  );

  return (
    <div className="cart">
      <section className="cart__products">
        {items.length !== 0 ? items : isEmpty}
      </section>
      <section className="cart__summary">
        <CartSummary cart={cart} />
      </section>
    </div>
  );
};

export default Cart;
