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
import './Cartpage.css';
import ProductTag from '../../components/cart-page/product-tag/product-tag';
import products from '../../data/products.json';

const Cartpage = () => {
    return (
        <div className="cart-page flex-col">
            <ProductTag product_id={products[0].product_id} selectedQuantity={4} selectedVariant="#02 Rosy"/>
        </div>
    );
};

export default Cartpage;
