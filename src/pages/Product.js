// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, fetchProducts } from "../redux/shopActions";

import QtyCounter from "../components/QtyCounter";
import { ReactComponent as Zigzak } from "../images/zagzak.svg";

import "../styles/Product.scss";

const Product = () => {
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  const productsStore = useSelector((state) => state.products);

  const handleCart = () => dispatch(addToCart(product.id, qty));

  useEffect(() => {
    if (productsStore.length === 0) {
      dispatch(fetchProducts());
      setIsLoading(true);
    } else {
      setIsLoading(false);
      // @ts-ignore
      const productsFilter = productsStore.filter(
        (product) => product.id === params.id
      );
      const [product] = productsFilter;
      const [picture] = product.assets;
      setProduct(product);
      setPicture(picture);
    }
  }, [productsStore]);

  const descriptionText = product.description
    ? product.description.slice(3, -4)
    : null;

  console.log(product);

  return (
    <div className="product">
      <img src={picture?.url} alt="donut" className="product__photo" />
      <div className="product__info">
        <div className="product__name">{product?.name}</div>
        <div className="product__price">{product?.price?.formatted}zł</div>
        <div className="product__description">{descriptionText}</div>
        <QtyCounter qty={qty} setQty={setQty} />
        <button className="button" onClick={handleCart}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default Product;
