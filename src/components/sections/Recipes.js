import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import dough from "../../images/dough.jpg";

import "../../styles/Recepis.scss";

const Recipes = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".recipes",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.from(".recipes__photo", { rotate: "0" }, 0);
  }, []);
  return (
    <div className="recipes">
      <p className="recipes__text">
        Wszystko zaczęło się od pasji do pieczenia, która następnie zamieniła
        się w pasję do cukiernictwa połączoną z profesjonalną edukacją i ciągłym
        doskonaleniem się w tej dziedzinie. Te umiejętności pozwoliły nam
        pracować nad recepturą pączków.
      </p>
      <img
        src={dough}
        alt="Zdjecie wyrabianego ciasta"
        className="recipes__photo"
      />
    </div>
  );
};

export default Recipes;
