import React from "react";

import shop from "../../images/shop.jpg";
import { ReactComponent as Zigzak } from "../../images/zagzak.svg";

import "../../styles/OurShop.scss";

const OurShop = () => {
  return (
    <div className="ourShop">
      <Zigzak className="ourShop__zigzak" />
      <img src={shop} alt="zdjęcie sklepu" className="ourShop__photo" />
      <p className="ourShop__text">
        Jesteśmy firmą rodzinną. Zawsze kochaliśmy słodkości, a pączki domowej
        roboty często gościły na naszych stołach. Pewnego dnia postanowiliśmy
        podzielić się nimi z Wami. Tak zrodził się pomysł otwarcia naszego
        sklepu!
      </p>
    </div>
  );
};

export default OurShop;
