import React from "react";
import "./product-detail-page.scss";
import { useParams } from 'react-router-dom';
import Button from "../../components/common/button/button";
import ProductDescription from "../../components/product-detail/product-description/product-description";
import ReviewSection from "../../components/product-detail/review-section/review-section";
import ProductSlider from "../../components/product-detail/product-slider/product-slider";
import getProductById from "../../utils/getProductById/getProductById";

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = getProductById(id);

    return (
        <div className="flex-col content-container product-detail-page">
            <div className="section-container flex-col prod-detail-section-1">
                <div className="section gap-2xl flex-row">
                    <div className="image-display flex-col gap-xs">
                        <div className="active-image-holder flex-col">
                            <img src={product.images[0]} alt="active-image" className="active-img"/>
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
                    <div className="prod-detail-container flex-col gap-ms align-left">
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
                                <h2 className="h2">{product.product_name}</h2>
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
            <div className="section-container flex-row prod-detail-section-2 gap-ms align-left">
                <ProductDescription />
                <ReviewSection />
            </div>
            <div className="section-container flex-row">
                <ProductSlider />
            </div>
        </div>
    )
}

export default ProductDetailPage;