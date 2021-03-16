import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductThumbnail from "../../components/ProductThumbnail";

import "../../styles/Products.scss";

const Products = () => {
  const products = useSelector((state) => state.products);
  const firstFiveProducts = products?.filter(
    (product) => products.indexOf(product) < 5
  );

  const arr = firstFiveProducts?.map((product) => (
    <ProductThumbnail key={product.id} product={product} />
  ));

  console.log(products);
  return (
    <div className="products">
      <h2 className="products__title">Nasza oferta</h2>
      {arr}
      <button className="products__button">
        <Link to="/produkty">Zobacz wszystkie</Link>
      </button>
    </div>
  );
};

export default Products;
