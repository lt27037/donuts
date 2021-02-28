import React, { useEffect, useRef } from 'react';

import { ReactComponent as LogoSvg } from '../images/Logo-mini.svg';
import CartCounter from '../components/CartCounter';

import '../styles/Header.scss';

const Header = () => {

   return (
      <header className="mainHeader">
         <LogoSvg className="mainHeader__logo"/>
         <CartCounter />
      </header>
   );
};

export default Header;