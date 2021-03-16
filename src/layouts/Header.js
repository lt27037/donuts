import React from "react";
import { useHistory, Link } from "react-router-dom";

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
    <header className="mainHeader ">
      <LogoSvg className="mainHeader__logo" onClick={handleLink} />
      <div className="mainHeader__wrapper">
        <CartCounter />
        <Link to="/produkty" className="mainHeader__products">
          Produkty
        </Link>
      </div>
    </header>
  );
};

export default Header;
