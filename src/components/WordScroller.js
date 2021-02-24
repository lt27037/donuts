import React from 'react';

import '../styles/WordScroller.scss';

const WordScroller = () => {
   return (
      <div className="wordScroller">
         <span className="wordScroller__word"> Produkty </span>
         <span className="wordScroller__word"> Popularne Produkty </span>
         <span className="wordScroller__word"> Popularne Produkty </span>
         <span className="wordScroller__word"> Popularne Produkty </span>
      </div>
   );
};

export default WordScroller;
