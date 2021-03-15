/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/shopActions";

import Mainsection from "../components/sections/Mainsection";
import TopProducts from "../components/sections/TopProducts";
import Recipes from "../components/sections/Recipes";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import OurShop from "../components/sections/OurShop";

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <Mainsection />
      <TopProducts />
      <About />
      <Recipes />
      <Products />
      <OurShop />
    </div>
  );
};

export default Homepage;
