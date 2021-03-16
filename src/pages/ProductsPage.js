import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductThumbnail from "../components/ProductThumbnail";
import { fetchProducts } from "../redux/shopActions";

import "../styles/ProductsPage.scss";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const arr = products?.map((product) => (
    <ProductThumbnail key={product.id} product={product} />
  ));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="productsPage">
      <h2 className="productsPage__title">Nasza oferta</h2>
      <section className="productsPage__container">{arr}</section>
    </div>
  );
};

export default Products;
