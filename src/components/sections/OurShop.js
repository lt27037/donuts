import React from "react";

import shop from "../../images/shop.jpg";

import "../../styles/OurShop.scss";

const OurShop = () => {
  return (
    <div className="ourShop">
      <img src={shop} alt="zdjęcie sklepu" className="ourShop__photo" />
      <p className="ourShop__text">
        Jesteśmy firmą rodzinną. Zawsze kochaliśmy słodkości, a pączki domowej
        roboty często gościły na naszych stołach. Pewnego dnia postanowiliśmy
        podzielić się nimi z Wami. Stary przepis wykorzystywany dotąd do
        pieczenia pączków na niedzielny stół, stał się udoskonaloną recepturą,
        według której teraz powstają nasze słodkości.
      </p>
    </div>
  );
};

export default OurShop;
