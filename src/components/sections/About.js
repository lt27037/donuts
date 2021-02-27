import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import { ReactComponent as Napis1 } from '../../images/NATURALNE-SKŁADNIKI.svg';
import { ReactComponent as Napis2 } from '../../images/WYTWARZANE-TRADYCYJNIE.svg';
import { ReactComponent as Zigzak } from '../../images/zagzak.svg';
import { ReactComponent as Strzalka } from '../../images/strzalka.svg';
import kobieta from '../../images/kobieta.jpg';
import ponczek from '../../images/ponczek.png';
import ponczek2 from '../../images/ponczek2.png';

import '../../styles/About.scss';


const About = () => {
   gsap.registerPlugin(ScrollTrigger);

   useEffect(
      () => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: '.about',
               start: 'top bottom',
               end: 'bottom top', 
               scrub: true
            }
         });

         tl.to('.about__woman', {y: -200, rotate: '-2deg'}, 0);
         tl.to('.about__ponczek', {y: -300}, 0);
         // tl.to('.about__ponczek', {y: -200}, 0);
      },
      []
   );

   return (
      <section className="about">
         <Zigzak className="about__zigzak" />
         <img src={ponczek} alt="Ilustracja pączka" className="about__ponczek first"/>
         <img src={ponczek2} alt="Ilustracja pączka" className="about__ponczek second"/> 
         <Napis1 className="about__napis1"/>
         <img src={kobieta} alt="Kobieta z donutem" className="about__woman"/>
         <Napis2 className="about__napis2"/>
         <Strzalka className="about__strzalka" />
      </section>
   );
};

export default About;
