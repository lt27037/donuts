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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas
        minus dignissimos assumenda veniam voluptatum aut blanditiis vel vero,
        repellendus rem. Ducimus excepturi inventore cupiditate reprehenderit
        provident itaque, iste voluptatibus!
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
