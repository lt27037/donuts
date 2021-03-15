import React from "react";

import "../styles/CartSummary.scss";

const CartSummary = () => {
  return (
    <div className="cartSummary">
      <h3 className="cartSummary__title">Wartosć zamówienia</h3>
      <span className="cartSummary__price">45.67 PLN</span>
      <span className="cartSummary__shipPrice">+ dostawa od 9.99 PLN</span>
      <h3 className="cartSummary__subtitle">Łącznie</h3>
      <span className="cartSummary__fullPrice">55.66 PLN</span>
      <button className="cartSummary__checkout">Przejdź do płatności</button>
    </div>
  );
};

export default CartSummary;
