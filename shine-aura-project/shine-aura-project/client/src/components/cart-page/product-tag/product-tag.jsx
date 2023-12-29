import React, {useState} from "react";
import "./product-tag.scss";
import getProductById from "../../../utils/getProductById/getProductById.js";
import dongFormatter from '../../../utils/dongFormatter/dongFormatter.js';

const ProductTag = ({product_id, selectedVariant, selectedQuantity, checkState}) => {
    const product = getProductById(product_id);
    const [quantity, setQuantity] = useState(selectedQuantity);

    const handleQuantityChange = (productId, newQuantity) => {
        if ((newQuantity <= 0) || (newQuantity >= 50)) return;
        else setQuantity(newQuantity);
    };

    let prodTotalPrice = product.price * quantity;

    return (
        <div className="product-tag">
            <div className="container flex-row">
                <div className="check-input">
                    <input type="checkbox" checked={checkState} />
                </div>
                <div className="prod-image flex-col">
                    <img src={product.images[0]} alt="product-image"/>
                </div>
                <div className="vt-divider"></div>
                <div className="prod-detail flex-col align-left gap-md">
                    <div className="prod-indetify flex-col gap-xs align-left">
                        <div className="prod-name max-wdth">
                            <p className="btn-text">{product.product_name}</p>
                        </div>
                        <div className="prod-price-stock-state flex-row gap-sm">
                            <div className="prod-price">
                                <p className="body-em">{dongFormatter(product.price*1000)}</p>
                            </div>
                            <div className="stock-state">
                                <p className="body-bld">Instock</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-detail flex-row gap-xs">
                        <div className="order-quantity flex-row gap-2xs">
                            <button onClick={() => handleQuantityChange(product.product_id, quantity - 1)}>
                                <i className="bi bi-dash square-icon"></i>
                            </button>
                            <p className="quantity-value flex-row">{quantity}</p>
                            <button onClick={() => handleQuantityChange(product.product_id, quantity + 1)}>
                                <i className="bi bi-plus square-icon"></i>
                            </button>
                        </div>
                        <div className="order-variant">
                            <p className="selected-variant">{selectedVariant}</p>
                        </div>
                    </div>
                    <div className="function-btn flex-row gap-xs">
                        <div className="add-to-wishlist flex-row gap-2xs">
                            <i className="bi bi-suit-heart square-icon icon-size-16"></i>
                            <p className="body-sml">Save</p>
                        </div>
                        <div className="delete-from-cart flex-row gap-2xs">
                            <i className="bi bi-trash3 square-icon icon-size-16"></i>
                            <p className="body-sml">Delete</p>
                        </div>
                    </div>
                </div>
                <div className="prod-total-price flex-col">
                    <p className="btn-text total-price-value">{dongFormatter(prodTotalPrice*1000)}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductTag;