import React from 'react';
import ReactSlider from 'react-slider';
import './product-slider.css'; // Import your CSS file
import ProductCard from '../../common/product-card/product-card';

const ProductSlider = ({ products }) => {
 return (
   <ReactSlider
     className="horizontal-slider"
     thumbClassName="example-thumb"
     trackClassName="example-track"
   >
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
   </ReactSlider>
 );
};

export default ProductSlider;