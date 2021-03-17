import React, { useState } from "react";

import "../styles/CartSummary.scss";

const CartSummary = ({ cart }) => {
  const [promocode, setPromocode] = useState("");
  const handlePromocode = (e) => setPromocode(e.target.value);

  let price = 0;
  cart.forEach((product) => (price += product.price.raw * product.qty));
  let fullPrice = price < 50 ? price + 9.99 : price;

  return (
    <div className="cartSummary">
      <h3 className="cartSummary__title">Wartosć zamówienia</h3>
      <span className="cartSummary__price">{price.toFixed(2)} PLN</span>
      {price < 50 ? (
        <span className="cartSummary__shipPrice">+ dostawa od 9.99 PLN</span>
      ) : null}
      <label htmlFor="promocode" className="cartSummary__promo">
        <span className="cartSummary__promo__title">Mam kod promocyjny</span>
        <input
          type="text"
          name="promocode"
          className="cartSummary__promo__input"
          onChange={handlePromocode}
          value={promocode}
        />
        <button className="cartSummary__promo__button">
          Dodaj kod promocyjny
        </button>
      </label>
      <h3 className="cartSummary__subtitle">Łącznie</h3>
      <span className="cartSummary__fullPrice">
        {price === 0 ? 0.0 : fullPrice.toFixed(2)} PLN
      </span>
      <button className="cartSummary__checkout">Złóż zamówienie</button>
    </div>
  );
};

export default CartSummary;
