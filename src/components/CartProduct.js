import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeFromCart, changeQty } from "../redux/shopActions";

import QtyCounter from "./QtyCounter";

import "../styles/CartProduct.scss";

const CartProduct = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const [photo] = product.assets;
  const dispatch = useDispatch();
  const history = useHistory();

  const price = product.price.raw;
  const fullPrice = price * qty;

  useEffect(() => {
    if (product.qty !== qty) {
      dispatch(changeQty(product.id, qty));
    }
  }, [qty]);

  return (
    <div className="cartProduct">
      <span
        className="cartProduct__photo"
        onClick={() => history.push({ pathname: `/produkt/${product.id}` })}
      >
        <img
          src={photo.url}
          alt="Zdjęcie produktu"
          className="cartProduct__img"
        />
      </span>
      <span
        className="cartProduct__name"
        onClick={() => history.push({ pathname: `/produkt/${product.id}` })}
      >
        {product.name}
      </span>
      <span className="cartProduct__price">{price.toFixed(2)}PLN</span>
      <QtyCounter qty={qty} setQty={setQty} />
      <span className="cartProduct__fullPrice">{fullPrice.toFixed(2)}PLN</span>
      <button
        className="cartProduct__delete"
        onClick={() => dispatch(removeFromCart(product.id))}
      ></button>
    </div>
  );
};

export default CartProduct;
