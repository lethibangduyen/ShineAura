import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import products from '../data/products.json'
import ProductCard from '../components/common/product-card/product-card';

const ProductCarousel = () => {
   const responsive = {
       desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3
       },
       tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2
       },
       mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1
       }
   };

   return (
       <Carousel responsive={responsive} sliderClass="flex-row">
           {products.map((product) => (
               <ProductCard key={product.product_id} product={product} />
           ))}
       </Carousel>
   )
};

export default ProductCarousel;