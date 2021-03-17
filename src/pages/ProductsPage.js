import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductThumbnail from "../components/ProductThumbnail";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { fetchProducts } from "../redux/shopActions";
import { ReactComponent as Zigzak } from "../images/zagzak.svg";
import { ReactComponent as Arrow } from "../images/strzalka.svg";

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
    <>
      <Header />
      <div className="productsPage">
        <Zigzak className="productsPage__zigzak" />
        <Zigzak className="productsPage__arrow" />
        <h2 className="productsPage__title">Nasza oferta</h2>
        <section className="productsPage__container">{arr}</section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
