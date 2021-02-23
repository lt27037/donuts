import React from 'react';

import Donuts from '../../images/donuts-main-baner.jpg';

import '../../styles/Mainsection.scss';

const Mainsection = () => {
   return (
      <section className="mainSection">
         <h1 className="mainSection__title">Donuts.</h1>
         <img 
         src={Donuts} 
         alt="Obrazek w tle przedstawiający donuty" 
         className="mainSection__background"
         />
      </section>
   );
};

export default Mainsection;
