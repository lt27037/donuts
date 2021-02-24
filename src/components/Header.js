import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import Logo from '../images/Logo-mini.png';
import { ReactComponent as LogoSvg } from '../images/Logo-mini.svg';

import '../styles/Header.scss';

const Header = () => {
   gsap.registerPlugin(ScrollTrigger);
   const logoElement = useRef(null);
   

   useEffect(
      () => {

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: '.topProducts',
               start: 'top top',
            }
         });

         tl.add(() => {
            let stroke = logoElement.current.getElementsByClassName('logoPart');
            let fill = logoElement.current.getElementsByClassName('arrow');
            stroke.forEach(element => element.style.stroke = "#000");
            fill.forEach(element => element.style.fill = "#000");
         })
         console.log(logoElement.current);

         let wrapper = logoElement.current;

         let stroke = logoElement.current.getElementsByClassName('logoPart');
         let fill = logoElement.current.getElementsByClassName('arrow');
         
      },
      []
   )


   return (
      <header className="mainHeader">
         <LogoSvg 
         className="mainHeader__logo" 
         ref={logoElement}
         />
      </header>
   );
};

export default Header;