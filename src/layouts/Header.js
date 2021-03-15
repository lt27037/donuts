import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../images/Logo-mini.svg";
import CartCounter from "../components/CartCounter";

import "../styles/Header.scss";

const Header = () => {
  const history = useHistory();

  const handleLink = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <header className="mainHeader header--invert">
      <LogoSvg className="mainHeader__logo" onClick={handleLink} />
      <CartCounter />
    </header>
  );
};

export default Header;
