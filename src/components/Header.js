import React from 'react';

import Logo from '../images/Logo-mini.png';

import '../styles/Header.scss';

const Header = () => {
   return (
      <header className="mainHeader">
         <img src={Logo} alt="Logo sklepu" className="mainHeader__logo"/>
      </header>
   );
};

export default Header;