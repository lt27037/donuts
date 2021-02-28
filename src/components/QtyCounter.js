import React, { useState } from 'react';

import '../styles/QtyCounter.scss';

const QtyCounter = ({qty, setQty}) => {

   const handleNumber = e => e.target.value.length < 4 ? setQty(e.target.value) : null;
   const handleIncrement = () => setQty(qty+1);
   const handleDecrement = () => qty === 1 ? null : setQty(qty-1);

   return (
      <div className="qtyCounter">
         <button className="qtyCounter__button" onClick={handleDecrement}></button>
         <input type="number" className="qtyCounter__number" value={qty} onChange={handleNumber}/>
         <button className="qtyCounter__button" onClick={handleIncrement}></button>
      </div>
   );
};

export default QtyCounter;
