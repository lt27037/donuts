import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useHistory, Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../images/Logo-mini.svg";
import CartCounter from "../components/CartCounter";

import "../styles/Header.scss";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const history = useHistory();

  const handleLink = () => {
    history.push({
      pathname: "/",
    });
  };

  useEffect(() => {
    if (history.location.pathname === "/") {
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainSection",
          start: "bottom 10%",
          end: "bottom top",
          scrub: true,
        },
      });

      tlHeader.fromTo(
        ".mainHeader",
        { filter: "invert(100%)" },
        { filter: "invert(0%)" },
        0
      );
    }
  }, [history.location]);

  return (
    <header className="mainHeader ">
      <LogoSvg className="mainHeader__logo" onClick={handleLink} />
      <div className="mainHeader__wrapper">
        <CartCounter />
      </div>
    </header>
  );
};

export default Header;
