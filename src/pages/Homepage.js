import React from 'react';

import Mainsection from '../components/sections/Mainsection';
import TopProducts from '../components/sections/TopProducts';
import Header from '../components/Header';

const Homepage = () => {
   return (
      <div>
         <Header />
         <Mainsection />
         <TopProducts />
      </div>
   );
};

export default Homepage;
