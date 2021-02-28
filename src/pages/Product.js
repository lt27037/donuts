import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import QtyCounter from '../components/QtyCounter';

import '../styles/Product.scss';

const Product = () => {
   const [ qty, setQty ] = useState(1);

   const params = useParams();
   const products = useSelector(state => state.products);
   // @ts-ignore
   const productsFilter = products.filter(product => product.id === params.id);
   const [ product ] = productsFilter;
   const { assets, name, price, description, quantity, is } = product;
   const [ picture ] = assets;

   const descriptionText = description ? description.slice(3, -4) : null;

   return (
      <div className="product">
         <img src={picture.url} alt="donut" className="product__photo"/>
         <div className="product__info">
            <div className="product__name">{name}</div>
            <div className="product__price">{price.formatted}zł</div>
            <div className="product__description">{descriptionText}</div>
            <QtyCounter qty={qty} setQty={setQty}/>
            <button className="button">Dodaj do koszyka</button>
         </div>
      </div>
   );
};

export default Product;
