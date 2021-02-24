import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import Donuts from '../../images/donuts-main-baner.jpg';

import '../../styles/Mainsection.scss';

const Mainsection = () => {

   gsap.registerPlugin(ScrollTrigger);

   const donutsBg = useRef(null);

   useEffect(
      () => {

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: '.welcome',
               start: 'top top',
               end: 'bottom center',
               scrub: true
            }
         });

         tl.to(donutsBg.current, {y: 120}, 0);
      },
      []
   )

   return (
      <section className="mainSection">
         <h1 className="mainSection__title">Donuts.</h1>
         <img 
         src={Donuts} 
         alt="Obrazek w tle przedstawiający donuty" 
         className="mainSection__background"
         ref={donutsBg}
         />
      </section>
   );
};

export default Mainsection;
