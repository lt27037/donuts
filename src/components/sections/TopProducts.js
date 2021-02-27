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

   useEffect(
      () => {
         const products = document.querySelectorAll('.productThumbnail');
         if(products.length !== 0){
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: '.topProducts',
                  start: 'top 60%',
                  end: 'top 5%', 
                  scrub: true
               }
            });
            
            tl.from(products, {
               stagger: {
                  from: 'start',
                  axis: 'x',
                  amount: 0.3
               },
               y: 100,
               opacity: 0
            }, 0);
         }
      },
      [products]
   )

   const popular = products.filter(product => products.indexOf(product) < 4);
   const productsElements = popular.map(product => <ProductThumbnail key={product.id} product={product} />);


   return (
      <section className="topProducts" ref={wrapper}>
         <WordScroller />
         <div className="topProducts__wrapper">
            {productsElements}
         </div>
      </section>
   );
};

export default TopProducts;
