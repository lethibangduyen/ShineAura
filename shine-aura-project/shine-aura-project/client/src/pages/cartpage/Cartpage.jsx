import React, { useState } from 'react';
import './Cartpage.css';
import Logo from '../../assets/img/product/product-image.png';


const Cartpage = () => {
    const [selectedProducts, setSelectedProducts] = useState([
        // Initialize with some sample data
        { id: 1, name: 'Product 1', price: 9.99, quantity: 1, color: 'Red', version: 'Standard' },
        // Add more products as needed
    ]);

    const handleQuantityChange = (productId, newQuantity) => {
        // Update the quantity of the selected product
        setSelectedProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
    };

    const handleRemoveProduct = (productId) => {
        // Remove the selected product from the cart
        setSelectedProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    const calculateSubtotal = () => {
        // Calculate the subtotal of the selected products
        return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="cartpage-shine">
            <div className="AddressLink">
                <a href="">HOME</a>
                <span> / </span>
                <a href="">CART</a>
            </div>
            <div className="CartPage flex-row align-left gap-ms">
                <div>
                    {selectedProducts.map((product) => (
                        <div key={product.id} className="CartPageProduct flex-row">
                            <div>
                                <input className="ButtonCheckBox" type="checkbox" />
                            </div>
                            <div className="ProductArea flex-col">
                                <div className="ProductDetail flex-row">
                                    <div className='cart-product-img flex-row'>
                                        <img className="ProductImg" alt="" src={Logo} />
                                    </div>
                                    <div className="P-Space"></div>
                                    <div className="ProductInfo gap-sm">
                                        <div className="product-cart-info flex-col gap-xs align-left">
                                            <span className="NameOProduct btn-text ">{product.name}</span>
                                            <div className="ProductSub flex-row gap-sm align-left">
                                                <p className="ProductSubLeft body-em  ">{`$${product.price.toFixed(2)}`}</p>
                                                <p className="ProductSubRight body-bld ">Instock/Outstock</p>
                                            </div>
                                        </div>
                                        <div className="ProductButtonInline flex-row gap-xs align-left">
                                            <div className="ProductButtonInlineLeft gap-xs">
                                                <div className="QuantityButtons flex-row gap-xs input-btn ">
                                                    <button
                                                        className="ButtonQuality"
                                                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                                                    >
                                                        <span>-</span>
                                                    </button>
                                                    <span className="QuantityValue">{product.quantity}</span>
                                                    <button
                                                        className="ButtonQuality"
                                                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                                                    >
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                                <div className="DropdownButton ButtonColor input-btn">
                                                    <span>COLOR</span>
                                                    <i className="bi bi-chevron-down"></i>
                                                    <div className="DropdownContent">
                                                        <div className="ColorOption">{product.color}</div>
                                                        {/* Add more color options as needed */}
                                                    </div>
                                                </div>
                                                <div className="DropdownButton ButtonVersion input-btn">
                                                    <span>VERSION</span>
                                                    <i className="bi bi-chevron-down"></i>
                                                    <div className="DropdownContent">
                                                        <div className="VersionOption">{product.version}</div>
                                                        {/* Add more version options as needed */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ProductButtonInlineRight">
                                                <button className="ButtonSave" onClick={() => handleRemoveProduct(product.id)}>
                                                    <i className="bi bi-trash3"></i>
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ProductPrice">
                                        <p>{`$${(product.price * product.quantity).toFixed(2)}`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="SpcaceDiv"></div>
                <div className="ContainerRight">
                    <div className="billing-detail">
                        <div className="bill-title">
                            <div className="h4">Billing Detail</div>
                            <div className="name body">Le Dac Thanh Loc</div>
                        </div>
                        <div className="order-sum">
                            <div className="order-sum-title">
                                <div className="body-bld">Order Summary</div>
                                <div className="body-bld">Price</div>
                            </div>
                            {selectedProducts.map((product) => (
    <div key={product.id} className="order-detail">
        <div className="body-sml left-item">{`${product.name} - Color ${product.color} - Version ${product.version}`}</div>
        <div className="body-sml">{`$${(product.price * product.quantity).toFixed(2)}`}</div>
    </div>
))}
                            {/* Repeat the above block for each product in the cart */}
                        </div>
                        <div className="discount-code">
                            <div className="body-bld">Discount Code</div>
                            <input className="apply-code" type="text" placeholder="### ### ###" />
                        </div>
                        <div className="subtotal">
                            <div className="body-bld">Subtotal</div>
                            <div className="sub-line">
                                <div className="body-sml left-item">Delivery</div>
                                <div className="body-sml">5.00</div>
                            </div>
                            {/* Add more sub-line blocks for Discount, Tax, etc. */}
                        </div>
                        <div className="total">
                            <div className="total-title body-bld">Total</div>
                            <div className="total-cost body-bld">{`$${calculateSubtotal().toFixed(2)}`}</div>
                        </div>
                    </div>
                    <div className="SomeButtons flex-row gap-2xs">
                        <button className="ButtonBackToShop">
                            <i className="bi bi-cart-plus IconBut"></i>
                            <span>BACK TO SHOPPING</span>
                        </button>
                        <button className="ButtonBuyNow">
                            <i className="bi bi-cart-check IconBut"></i>
                            <span>BUY NOW</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpage;
