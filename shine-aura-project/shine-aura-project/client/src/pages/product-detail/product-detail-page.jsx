import React from "react";
import "./product-detail-page.scss";
import { useParams } from 'react-router-dom';
import Button from "../../components/common/button/button";
import ProductDescription from "../../components/product-detail/product-description/product-description";
import ReviewSection from "../../components/product-detail/review-section/review-section";
import getProductById from "../../utils/getProductById/getProductById.js";
import getProductByBrand from "../../utils/getProductByBrand/getProductByBrand.js";
import ProductCard from "../../components/common/product-card/product-card";
import Carousel from "react-multi-carousel";

const CarouselButton = ({ next, previous, ...rest }) => (
    <div>
      <button onClick={previous}><i className="bi bi-chevron-left"></i></button>
      <button onClick={next}><i className="bi bi-chevron-right"></i></button>
    </div>
);

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const similarProducts = getProductByBrand(product.brands);
    console.log(similarProducts);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
    };

    return (
        <div className="flex-col content-container product-detail-page">
            <div className="section-container flex-col prod-detail-section-1">
                <div className="section gap-2xl flex-row res-width">
                    <div className="image-display flex-col gap-xs res-width">
                        <div className="active-image-holder flex-col res-width">
                            <img src={product.images[0]} alt="active-image res-width" className="active-img"/>
                        </div>
                        <div className="prod-image-slider flex-row">
                            <div className="left-button">
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div className="unactive-image-holder flex-row gap-xs">
                                <img src={product.images[1]} alt="unactive-image" className="unactive-img"/>
                                <img src={product.images[2]} alt="unactive-image" className="unactive-img"/>
                                <img src={product.images[3]} alt="unactive-image" className="unactive-img"/>   
                            </div>
                            <div className="right-button">
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="vt-divider"></div>
                    <div className="prod-detail-container flex-col gap-ms align-left ">
                        <div className="prod-br-nm-rv flex-col align-left gap-2xs">
                            <div className="prod-review flex-row gap-xs">
                                <div className="review-stars">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </div>
                                <div className="review-rate">
                                    <p>123 reviews</p>   
                                </div>
                            </div>
                            <div className="prod-brand">
                                <p className="pre-title">{product.brands}</p>
                            </div>
                            <div className="prod-name">
                                <p className="h2">{product.product_name}</p>
                            </div>
                        </div>
                        <div className="prod-desc-con">
                            <p className="body truncated-para">{product.tab_data.description}</p>
                        </div>
                        <div className="prod-discount flex-row gap-xs">
                            <i className="bi bi-gift"></i>
                            <p className="body-em">Get 60% discount if the first buyer.</p>
                        </div>
                        <div className="prod-price">
                            <h3 className="h3">{product.price}.000&#x20AB;</h3>
                        </div>
                        <div className="button-container flex-col gap-sm align-left">
                            <div className="variant-select-btns flex-row gap-xs align-left flex-wrap flex-top-align">
                                {product.variants.map((variant, index) => (
                                    <Button 
                                        key={index} 
                                        text={variant}
                                        btnStyle="auth-btn" 
                                        textStyle="btn-text-lgt" 
                                        icon="bi bi-circle-fill icon-size square-icon" 
                                        frameStyle="prod-detail-btn"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-container prod-detail-section-2 flex-col">
                <div className="section flex-row gap-ms align-left">
                    <ProductDescription />
                    <ReviewSection />
                </div>
            </div>
            <div className="section-container flex-row">
                <div className="section flex-col gap-md">
                    <div className="similar-prod-title">
                        <p className="h2 uppercase">similar products</p>
                    </div>
                    <Carousel responsive={responsive} containerClass="carousel-container" itemClass="width-reset flex-col" slidesToSlide={1} keyBoardControl={true} arrows={true} removeArrowOnDeviceType={["mobile"]}>
                        {similarProducts.map((product) => (
                            <ProductCard key={product.produc_id} product={product} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage;