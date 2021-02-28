/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/shopActions';

import Mainsection from '../components/sections/Mainsection';
import TopProducts from '../components/sections/TopProducts';
import Recipes from '../components/sections/Recipes';
import About from '../components/sections/About';

const Homepage = () => {
   const dispatch = useDispatch();

   useEffect(
      () => {
         dispatch(fetchProducts())
      },
      []
   )

   return (
      <div>
         <Mainsection />
         <TopProducts />
         <About />
         <Recipes />
      </div>
   );
};

export default Homepage;
