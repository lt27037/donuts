import React from 'react';

import pictures from '../images/products/donut1-min.jpg'

import '../styles/ProductsThumbnail.scss';

const ProductThumbnail = ({product}) => {
   return (
      <div className="productThumbnail">
         <img src={pictures} alt="donut" className="productThumbnail__photo"/>
         <div className="productThumbnail__info">
            <span className="productThumbnail__title">{product.name}</span>
            <span className="productThumbnail__price">{product.price.formatted}zł</span>
         </div>
      </div>
   );
};

export default ProductThumbnail;
