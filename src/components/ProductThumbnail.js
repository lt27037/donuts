import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/ProductsThumbnail.scss';

const ProductThumbnail = ({ product }) => {

   const { assets, name, price } = product;
   const [ picture ] = assets;
   const history = useHistory();

   const handleLink = () => {
      history.push({
         pathname: `/produkt/${product?.id}`
      })
   }

   return (
      <div className="productThumbnail">
         <div className="productThumbnail__photoWrapper" onClick={handleLink} >
            <img src={picture.url} alt="donut" className="productThumbnail__photo"/>
         </div>
         <div className="productThumbnail__info" onClick={handleLink} >
            <span className="productThumbnail__title">{name}</span>
            <span className="productThumbnail__price">{price.formatted}zł</span>
         </div>
      </div>
   );
};

export default ProductThumbnail;
