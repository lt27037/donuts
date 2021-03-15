import React from "react";

import shop from "../../images/shop.jpg";

import "../../styles/OurShop.scss";

const OurShop = () => {
  return (
    <div className="ourShop">
      <img src={shop} alt="zdjęcie sklepu" className="ourShop__photo" />
      <p className="ourShop__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint
        tempora voluptatem vel error, quae obcaecati enim magni at distinctio
        aut? Facilis nemo voluptate numquam, doloremque eligendi quis unde
        velit.
      </p>
    </div>
  );
};

export default OurShop;
