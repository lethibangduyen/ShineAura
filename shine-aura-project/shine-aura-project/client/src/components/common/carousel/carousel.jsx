import React from 'react';
import Carousel from 'react-multi-carousel';
import './carousel.scss';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../../common/product-card/product-card';

const ProductCarousel = ({ products }) => {
  const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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
      <Carousel responsive={responsive} itemClass="width-reset" sliderClass='flex-row gap-xs' draggable="true" showDots="true" slidesToSlide={1}>
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
      </Carousel>
    )
};

export default ProductCarousel;