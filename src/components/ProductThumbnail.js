import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/shopActions";

import { ReactComponent as AddToCart } from "../images/add_shopping_cart_black_24dp.svg";

import "../styles/ProductsThumbnail.scss";

const ProductThumbnail = ({ product }) => {
  const { assets, name, price } = product;
  const [picture] = assets;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLink = () => {
    history.push({
      pathname: `/produkt/${product?.id}`,
    });
  };

  return (
    <div className="productThumbnail">
      <div className="productThumbnail__photoWrapper" onClick={handleLink}>
        <img
          src={picture.url}
          alt="donut"
          className="productThumbnail__photo"
        />
      </div>
      <div className="productThumbnail__wrapper">
        <div className="productThumbnail__info" onClick={handleLink}>
          <span className="productThumbnail__title">{name}</span>
          <span className="productThumbnail__price">{price.formatted}zł</span>
        </div>
        <AddToCart
          className="productThumbnail__addToCart"
          onClick={() => dispatch(addToCart(product.id))}
        />
      </div>
    </div>
  );
};

export default ProductThumbnail;
