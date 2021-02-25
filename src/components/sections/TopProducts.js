import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import WordScroller from '../WordScroller';
import ProductThumbnail from '../ProductThumbnail';

import '../../styles/TopProducts.scss';

const TopProducts = () => {
   gsap.registerPlugin(ScrollTrigger);
   const wrapper = useRef(null);
   const state = useSelector(state => state);

   const { products } = state;

   console.log(products);

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

   const productsElements = products.map(product => <ProductThumbnail product={product} />);


   return (
      <section className="topProducts" ref={wrapper}>
         <WordScroller />
         {productsElements[0]}
      </section>
   );
};

export default TopProducts;
