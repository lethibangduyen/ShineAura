import React from "react";
import "./product-detail-page.css";
import MainImage from "../../assets/img/product-detail/main-image.png";
import Thumbnail1 from "../../assets/img/product-detail/thumbnail-1.png";
import Thumbnail2 from "../../assets/img/product-detail/thumbnail-2.png";
import Thumbnail3 from "../../assets/img/product-detail/thumbnail-3.png";
import Button from "../../components/common/button/button";
import ProductDescription from "../../components/product-detail/product-description/product-description";
import ReviewSection from "../../components/product-detail/review-section/review-section";
import ProductSlider from "../../components/product-detail/product-slider/product-slider";

const ProductDetailPage = () => {
    return (
        <div className="flex-col content-container">
            <div className="section-container flex-col prod-detail-section-1">
                <div className="section gap-2xl flex-row">
                    <div className="image-display flex-col gap-xs">
                        <div className="active-image-holder flex-col">
                            <img src={MainImage} alt="active-image" className="active-img"/>
                        </div>
                        <div className="prod-image-slider flex-row">
                            <div className="left-button">
                                <i className="bi bi-chevron-left"></i>
                            </div>
                            <div className="unactive-image-holder flex-row gap-xs">
                                <img src={Thumbnail1} alt="unactive-image" className="unactive-img"/>
                                <img src={Thumbnail2} alt="unactive-image" className="unactive-img"/>
                                <img src={Thumbnail3} alt="unactive-image" className="unactive-img"/>   
                            </div>
                            <div className="right-button">
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="vt-divider"></div>
                    <div className="prod-detail-container flex-col gap-ms align-left">
                        <div className="prod-br-nm-rv flex-col align-left">
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
                            <div className="prod-name">
                                <h2 className="h2">Product Name</h2>
                            </div>
                            <div className="prod-brand">
                                <p className="pre-title">Brand</p>
                            </div>
                        </div>
                        <div className="prod-desc-con">
                            <p className="body truncated-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque mauris quis eros pulvinar euismod. Nulla facilisi. Nulla facilisi. Nunc mi elit, posuere eget quam ut, sodales pellentesque mauris. Aenean luctus facilisis tellus, id tincidunt dolor eleifend sed. Sed placerat consequat nunc, vitae imperdiet magna tempus id. Ut scelerisque nec nibh nec convallis.</p>
                        </div>
                        <div className="prod-discount flex-row gap-xs">
                            <i className="bi bi-gift"></i>
                            <p className="body-em">Get 60% discount if the first buyer.</p>
                        </div>
                        <div className="prod-price">
                            <h3 className="h3">$16.40</h3>
                        </div>
                        <div className="button-container flex-col gap-sm align-left">
                            <div className="variants-select-btn flex-row gap-sm">
                                <Button text="Select Variant" btnStyle="auth-btn" textStyle="btn-text-lgt" icon="bi bi-circle-fill icon-size square-icon" frameStyle="prod-detail-btn"/>
                                <Button text="Select Variant" btnStyle="auth-btn" textStyle="btn-text-lgt" icon="bi bi-circle-fill icon-size square-icon" frameStyle="prod-detail-btn"/>
                            </div>
                            <div className="quantity-select-btn">
                                <Button text="- 1 +" btnStyle="auth-btn" textStyle="btn-text-lgt" frameStyle="prod-detail-btn"/>
                            </div>
                            <div className="buying-opt-btn flex-row gap-sm">
                                <Button text="BUY NOW" btnStyle="auth-btn" textStyle="btn-text" frameStyle="prod-detail-btn"/>
                                <Button text="ADD TO CART" btnStyle="auth-btn" textStyle="btn-text" frameStyle="prod-detail-btn"/>
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