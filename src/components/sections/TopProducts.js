import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import WordScroller from '../WordScroller';

import '../../styles/TopProducts.scss';

const TopProducts = () => {
   gsap.registerPlugin(ScrollTrigger);
   const wrapper = useRef(null);

   useEffect(
      () => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: '.topProducts',
               start: 'top bottom',
               end: 'bottom center',
               scrub: true
            }
         });
         tl.to('.wordScroller', {x: -250}, 0);
      },
      []
   );


   return (
      <section className="topProducts" ref={wrapper}>
         <WordScroller />
      </section>
   );
};

export default TopProducts;
