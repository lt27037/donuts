import React from 'react';

import '../styles/ProductsThumbnail.scss';

const ProductThumbnail = ({ product }) => {

   const { assets, name, price } = product;
   const [ picture ] = assets;

   return (
      <div className="productThumbnail" >
         <div className="productThumbnail__photoWrapper">
            <img src={picture.url} alt="donut" className="productThumbnail__photo"/>
         </div>
         <div className="productThumbnail__info">
            <span className="productThumbnail__title">{name}</span>
            <span className="productThumbnail__price">{price.formatted}zł</span>
         </div>
      </div>
   );
};

export default ProductThumbnail;
