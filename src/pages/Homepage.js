/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/shopActions';

import Mainsection from '../components/sections/Mainsection';
import TopProducts from '../components/sections/TopProducts';
import Header from '../components/Header';

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
         <Header />
         <Mainsection />
         <TopProducts />
      </div>
   );
};

export default Homepage;
