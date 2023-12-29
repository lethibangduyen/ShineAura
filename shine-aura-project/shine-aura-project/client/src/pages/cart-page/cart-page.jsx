// import React, { useState } from 'react';
// import './Cartpage.css';
// import Logo from '../../assets/img/product/product-image.png';

// import { Link } from 'react-router-dom';

// const Cartpage = () => {
//     // const navigate = useNavigate();

//     const [selectedProducts, setSelectedProducts] = useState([
//         { id: 1, name: 'Product 1', price: 9.99, quantity: 1, color: 'Red', version: 'Standard' },
//         { id: 2, name: 'Product 2', price: 6, quantity: 1, color: 'Blue', version: 'Standard' },
//         { id: 3, name: 'Product 3', price: 8, quantity: 2, color: 'Blue', version: 'Standard' },
//     ]);

//         const handleQuantityChange = (productId, newQuantity) => {
//             setSelectedProducts((prevProducts) =>
//                 prevProducts.map((product) =>
//                     product.id === productId ? { ...product, quantity: newQuantity } : product
//                 )
//             );
//         };

//     const [selectedProductIds, setSelectedProductIds] = useState([]);
//     const handleToggleProduct = (productId) => {
//         setSelectedProductIds((prevSelectedProductIds) => {
//             if (prevSelectedProductIds.includes(productId)) {
//                 return prevSelectedProductIds.filter((id) => id !== productId);
//             } else {
//                 return [...prevSelectedProductIds, productId];
//             }
//         });
//     };

//     const handleRemoveProduct = (productId) => {
//         setSelectedProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
//     };

//     const calculateSubtotal = () => {
//         return selectedProducts
//             .filter((product) => selectedProductIds.includes(product.id))
//             .reduce((total, product) => total + product.price * product.quantity, 0);
//     };

//     const calculateDelivery = () => {
//         return 5.00;
//     };

//     const calculateDiscount = (subtotal) => {
//         return subtotal * 0.20;
//     };

//     const calculateTax = (subtotal) => {
//         return subtotal * 0.10;
//     };

//     const calculateTotal = () => {
//         const subtotal = calculateSubtotal();
//         const delivery = selectedProductIds.length > 0 ? calculateDelivery() : 0;
//         const discount = calculateDiscount(subtotal);
//         const tax = calculateTax(subtotal);
//         return subtotal + delivery - discount + tax;
//     };

//     const handleBuyNow = () => {
//         const selectedProductIds = selectedProducts.map(product => product.id);
//         const url = `/payment?selectedProductIds=${selectedProductIds.join(',')}`;
//         window.location.href = url;

//     };

//     return (
//         <div className="cartpage-shine">
//             <div className="AddressLink">
//                 <Link className="LinkOB" to="/">
//                     HOME
//                 </Link>
//                 <span> / </span>
//                 <Link className="LinkOB" to="/cart">
//                     CART
//                 </Link>
//             </div>
//             <div className="CartPage flex-row align-left">
//                 <div>
//                     {selectedProducts.map((product) => (
//                         <div key={product.id} className="CartPageProduct flex-row">
//                             <div>
//                                 <input
//                                     className="ButtonCheckBox"
//                                     type="checkbox"
//                                     checked={selectedProductIds.includes(product.id)}
//                                     onChange={() => handleToggleProduct(product.id)}
//                                 />
//                             </div>
//                             <div className="ProductArea flex-col">
//                                 <div className="ProductDetail flex-row">
//                                     <div className='cart-product-img flex-row'>
//                                         <img className="ProductImg" alt="" src={Logo} />
//                                     </div>
//                                     <div className="P-Space"></div>
//                                     <div className="ProductInfo gap-sm">
//                                         <div className="product-cart-info flex-col gap-xs align-left">
//                                             <span className="NameOProduct btn-text ">{product.name}</span>
//                                             <div className="ProductSub flex-row gap-sm align-left">
//                                                 <p className="ProductSubLeft body-em  ">{`$${product.price.toFixed(2)}`}</p>
//                                                 <p className="ProductSubRight body-bld ">Instock/Outstock</p>
//                                             </div>
//                                         </div>
//                                         <div className="ProductButtonInline flex-row gap-xs align-left">
//                                             <div className="ProductButtonInlineLeft gap-xs">
//                                                 <div className="QuantityButtons flex-row gap-xs input-btn ">
//                                                     <button
//                                                         className="ButtonQuality"
//                                                         onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
//                                                     >
//                                                         <span>-</span>
//                                                     </button>
//                                                     <span className="QuantityValue">{product.quantity}</span>
//                                                     <button
//                                                         className="ButtonQuality"
//                                                         onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
//                                                     >
//                                                         <span>+</span>
//                                                     </button>
//                                                 </div>
//                                                 <div className="DropdownButton ButtonColor input-btn">
//                                                     <span>COLOR</span>
//                                                     <i className="bi bi-chevron-down"></i>
//                                                     <div className="DropdownContent">
//                                                         <div className="ColorOption">{product.color}</div>
//                                                         {/* Add more color options as needed */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="ProductButtonInlineRight">
//                                                 <button className="ButtonSave" onClick={() => handleRemoveProduct(product.id)}>
//                                                     <i className="bi bi-trash3"></i>
//                                                     <span>Delete</span>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="ProductPrice">
//                                         <p>{`$${(product.price * product.quantity).toFixed(2)}`}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="ContainerRight">

//                     <div className="billing-detail">
//                         <div className="bill-title">
//                             <div className="h4">Billing Detail</div>
//                             <div className="name body">Le Dac Thanh Loc</div>
//                         </div>
//                         <div className="order-sum">
//                             <div className="order-sum-title">
//                                 <div className="body-bld">Order Summary</div>
//                                 <div className="body-bld">Price</div>
//                             </div>
//                             {selectedProducts
//                                 .filter((product) => selectedProductIds.includes(product.id))
//                                 .map((product) => (
//                                     <div key={product.id} className="order-detail">
//                                         <div className="body-sml left-item">{`${product.name} - Color ${product.color} - Version ${product.version}`}</div>
//                                         <div className="body-sml iProduct">{`${(product.price * product.quantity).toFixed(2)}`}</div>
//                                     </div>
//                                 ))}
//                             {/* Repeat the above block for each product in the cart */}
//                         </div>
//                         <div className="discount-code">
//                             <div className="body-bld">Discount Code</div>
//                             <input className="apply-code" type="text" placeholder="### ### ###" />
//                         </div>
//                         <div className="subtotal">
//                             <div className="body-bld">Subtotal</div>
//                             <div className="sub-line">
//                                 <div className="body-sml left-item">Delivery</div>
//                                 <div className="body-sml">{selectedProductIds.length > 0 ? calculateDelivery().toFixed(2) : '0.00'}</div>
//                             </div>
//                             <div className="sub-line">
//                                 <div className="body-sml left-item">Discount</div>
//                                 <div className="body-sml">- {calculateDiscount(calculateSubtotal()).toFixed(2)} (20%)</div>
//                             </div>
//                             <div className="sub-line">
//                                 <div className="body-sml left-item">Tax</div>
//                                 <div className="body-sml">{calculateTax(calculateSubtotal()).toFixed(2)} (10%)</div>
//                             </div>
//                             {/* Add more sub-line blocks for Discount, Tax, etc. */}
//                         </div>
//                         <div className="total">
//                             <div className="total-title body-bld">Total</div>
//                             <div className="total-cost body-bld">{`$${calculateTotal().toFixed(2)}`}</div>
//                         </div>
//                     </div>


//                     <div className="SomeButtons flex-row gap-2xs">
//                         <Link className="LinkOB" to="/product">
//                             <button className="ButtonBackToShop">
//                                 <i className="bi bi-cart-plus IconBut"></i>
//                                 <span>BACK TO SHOPPING</span>
//                             </button>
//                         </Link>
//                         <Link className="LinkOB" to="/payment">
//                             <button className="ButtonBuyNow" onClick={handleBuyNow}>
//                                 <i className="bi bi-cart-check IconBut"></i>
//                                 <span>BUY NOW</span>
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cartpage;

import React from 'react';
import './cart-page.scss';
import ProductTag from '../../components/cart-page/product-tag/product-tag';
import products from '../../data/products.json';
import Button from '../../components/common/button/button';

const Cartpage = () => {
    return (
        <div className="cart-page flex-row gap-sm align-left">
            <div className='order-detail flex-col gap-xs'>
                <ProductTag product_id={products[0].product_id} selectedQuantity={3} selectedVariant="#02 Rosy"/>
                <ProductTag product_id={products[1].product_id} selectedQuantity={2} selectedVariant="#02 Rosy"/>
                <ProductTag product_id={products[2].product_id} selectedQuantity={1} selectedVariant="#02 Rosy"/>
            </div>
            <div className="billing-detail flex-col gap-xs">
                <div className="billing-container flex-col gap-sm align-left">
                    <div className="billing-title flex-col gap-2xs align-left">
                        <p className='h4 capitalize'>billing detail</p>
                        <p className='body'>Let's checkout!</p>
                    </div>
                    <div className='order-summary flex-col gap-xs align-left max-wdth'>
                        <div className='order-title flex-row max-wdth'>
                            <p className='body-bld capitalize'>order sumary</p>
                            <p className='body-bld capitalize'>price</p>
                        </div>
                        <div className="order-items flex-row max-wdth">
                            <div className='item flex-col gap-xs body-sml align-left'>
                                <p className='product-name'>Product Name 1</p>
                                <p className='product-name'>Product Name 2</p>
                                <p className='product-name'>Product Name 3</p>
                            </div>
                            <div className="item-price flex-col gap-xs body-sml align-right">
                                <p className='product-price'>9.99</p>
                                <p className='product-price'>9.99</p>
                                <p className='product-price'>9.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="hr-divider"></div>
                    <div className="discount flex-col gap-xs align-left max-wdth">
                        <div className='discount-title'>
                            <p className='body-bld capitalize'>discount code</p>
                        </div>
                        <div className='discount-input max-wdth flex-col'>
                            <input className='max-wdth' type="text" placeholder="Enter your discount code."/>
                        </div>
                    </div>
                    <div className="hr-divider"></div>
                    <div className="sub-total flex-col gap-xs align-left max-wdth">
                        <div className='discount-title'>
                            <p className='body-bld capitalize'>sub total</p>
                        </div>
                        <div className="discount-section flex-row max-wdth">
                            <div className='discount-tags flex-col gap-xs body-sml align-left'>
                                <p className='tag capitalize'>delivery</p>
                                <p className='tag capitalize'>discount</p>
                                <p className='tag capitalize'>tax</p>
                            </div>
                            <div className="item-price flex-col gap-xs body-sml align-right">
                                <p className='product-price'>5.00</p>
                                <p className='product-price'>-5.99 (20%)</p>
                                <p className='product-price'>2.99 (10%)</p>
                            </div>
                        </div>
                    </div>
                    <div className="hr-divider"></div>
                    <div className="total-price flex-row max-wdth">
                        <div className="total-price-title">
                            <p className='body-bld capitalize'>total</p>
                        </div>
                        <div className="total-price-value">
                            <p className='body-bld capitalize'>9.99</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-btns flex-row max-wdth gap-xs">
                    <div className="back-to-collection max-wdth">
                        <Button btnStyle='auth-btn' customBtnStyle='max-wdth' text='back to shopping' frameStyle='max-wdth' textStyle='uppercase' iconL="bi bi-cart-plus icon-size-16 square-icon"/>
                    </div>
                    <div className="buy-now max-wdth">
                        <Button btnStyle='auth-btn' customBtnStyle='max-wdth' text='buy now' frameStyle='max-wdth' textStyle='uppercase' iconL="bi bi-cart-check icon-size-16 square-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpage;
