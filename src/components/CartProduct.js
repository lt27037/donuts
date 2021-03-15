import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../redux/shopActions";

import QtyCounter from "./QtyCounter";

import "../styles/CartProduct.scss";

const CartProduct = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const [photo] = product.assets;
  const dispatch = useDispatch();

  return (
    <div className="cartProduct">
      <span className="cartProduct__photo">
        <img
          src={photo.url}
          alt="Zdjęcie produktu"
          className="cartProduct__img"
        />
      </span>
      <span className="cartProduct__name">{product.name}</span>
      <span className="cartProduct__price">{product.price.formatted}PLN</span>
      <QtyCounter qty={qty} setQty={setQty} />
      <span className="cartProduct__fullPrice">
        {product.price.raw * qty}PLN
      </span>
      <button
        className="cartProduct__delete"
        onClick={() => dispatch(removeFromCart(product.id))}
      ></button>
    </div>
  );
};

export default CartProduct;
