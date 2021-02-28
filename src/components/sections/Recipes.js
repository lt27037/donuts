import React from 'react';

import dough from '../../images/dough.jpg';

import '../../styles/Recepis.scss';

const Recipes = () => {
   return (
      <div className="recipes">
         <img src={dough} alt="Zdjecie wyrabianego ciasta" className="recipes__photo"/>
      </div>
   );
};

export default Recipes;
