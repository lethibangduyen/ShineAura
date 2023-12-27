import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './product-card.scss';

import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    if (!product || !product.images) {
        return null;
    }

    const containerClassName = isExpanded
        ? 'product-card-com flex-row prod-container prod-exp'
        : 'product-card-com flex-row prod-container prod-c';

    return (
        <div className={containerClassName}>
            <div className='flex-col prod-holder'>
                <div className='flex-col prod-img-container'>
                    <img src={product.images[0]} alt={product.product_name} title={product.product_name} className='prod-img' />
                </div>
                <div className='flex-row prod-info bg-ivory align-left gap-xs'>
                    <div className='flex-col gap-sm left-bar'>
                        <div className='flex-col gap-xs prod-n-pr'>
                            <Link to={`/product/${product.product_id}`}>
                                <div className='prod-name' title={product.product_name}>{product.product_name}</div>
                            </Link>
                            <div className='prod-price'>{product.price}.000&#x20AB;</div>
                        </div>
                        <div className='flex-row gap-2xs color-vars'>
                            {product.variants.map((variant, index) => (
                                <div key={index} className='color-var'>
                                    {variant}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-col gap-2xs icon-collection'>
                        <i className='bi bi-suit-heart'></i>
                        <i className="bi bi-cart-plus"></i>
                        <i className='bi bi-box-arrow-up-right' onClick={handleExpandClick}></i>
                    </div>
                </div>
            </div>
            <div className='flex-col align-left prod-info-exp'>
                <div className='prod-info-exp-holder flex-col gap-xs align-left'>
                    <div className='flex-col gap-2xs prod-n-pr-review align-left'>
                        <p className='prod-brand'>{product.brands}</p>
                        <p className='prod-name'>{product.product_name}</p>
                        <div className='flex-row prod-review gap-2xs'>
                            <p className='review-rate'>000 review</p>
                        </div>
                    </div>
                    <div className='prod-price'>{product.price}.000&#x20AB;</div>
                    <div className='prod-des'>
                    {product.tab_data.description.map((para, index) => (
                                <p key={index} className='para'>
                                    {para}
                                </p>
                            ))}
                    </div>
                    <div className='flex-col gap-2xs align-left color-select'>
                        <p className='btn-text-lgt uppercase'>Colors</p>
                        <div className='flex-row gap-2xs color-vars flex-wrap align-left flex-left-align'>
                            {product.variants.map((variant, index) => (
                                <div key={index} className='color-var body-lgt'>
                                    {variant}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-row gap-xs btn-collection'>
                        <button className='body-lgt uppercase'>buy now</button>
                        <button className='body-lgt uppercase'>add to cart</button>
                    </div>
                    <div className='flex-row gap-xs icon-collection'>
                        <i className='bi bi-suit-heart'></i>
                        <i className='bi bi-cart-plus'></i>
                        <i className='bi bi-x-lg' onClick={handleExpandClick}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

// import React from 'react';
// import './product-card.scss'

// import ProductImage from '../../../assets/img/product/product-image.png'
// import { useState } from 'react'

// const ProductCard = ({ product }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const handleExpandClick = () => {
//         setIsExpanded((prevExpanded) => !prevExpanded);
//     };

//     const containerClassName = isExpanded
//         ? 'flex-row prod-container prod-exp'
//         : 'flex-row prod-container prod-c';


//     return (
//         <div className={containerClassName}>
//             <div className='flex-col'>
//                 <div className='flex-row prod-img-container'>
//                     <img src={ProductImage} alt="Product" className='prod-img'/>
//                 </div>
//                 <div className='flex-row prod-info bg-ivory'>
//                     <div className='flex-col gap-sm left-bar'>
//                         <div className='flex-col gap-2xs prod-n-pr align-left'>
//                             <div className='prod-name'>3CE HAZY LIP CLAY</div>
//                             <div className='prod-price'>$20 USD</div>
//                         </div>
//                         <div className='flex-row gap-2xs color-vars'>
//                             <div className='color-var'></div>
//                             <div className='color-var'></div>
//                             <div className='color-var'></div>
//                         </div>
//                     </div>
//                     <div className='flex-col gap-2xs icon-collection'>
//                         <i className='bi bi-suit-heart'></i>
//                         <i className="bi bi-cart-plus"></i>
//                         <i className='bi bi-box-arrow-up-right' onClick={handleExpandClick}></i>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex-col align-left prod-info-exp'>
//                 <div className='flex-col gap-xs align-left'>
//                     <div className='flex-col gap-2xs prod-n-pr-review align-left'>
//                         <p className='prod-brand subtitle'>COLLECTION NAME</p>
//                         <p className='prod-name'>3CE HAZY LIP CLAY</p>
//                         <div className='flex-row prod-review gap-2xs'>
//                             <div className='review-stars flex-row'>
//                                 <i className='bi bi-star square-icon'></i>
//                                 <i className='bi bi-star square-icon'></i>
//                                 <i className='bi bi-star square-icon'></i>
//                                 <i className='bi bi-star square-icon'></i>
//                                 <i className='bi bi-star square-icon'></i>
//                             </div>
//                             <p className='review-rate'>000 review</p>
//                         </div>
//                     </div>
//                     <div className='prod-price'>$9.99</div>
//                     <div className='prod-des'>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque tellus, venenatis at tincidunt sed, fermentum eu nibh. Mauris aliquet feugiat ex imperdiet tristique. Quisque vehicula, turpis at accumsan accumsan.</p>
//                     </div>
//                     <div className='flex-col gap-2xs align-left color-select'>
//                         <p className='select-label'>Colors</p>
//                         <div className='flex-row gap-2xs color-vars'>
//                             <div className='color-var'></div>
//                             <div className='color-var'></div>
//                             <div className='color-var'></div>
//                         </div>
//                     </div>
//                     <div className='flex-col gap-2xs align-left version-select'>
//                         <div className='select-label'>Version</div>
//                         <div className='version-vars flex-row gap-xs'>
//                             <div className='version-var'>Version 1</div>
//                             <div className='version-var'>Version 2</div>
//                         </div>
//                     </div>
//                     <div className='flex-row gap-xs btn-collection'>
//                         <button></button>
//                         <button></button>
//                     </div>
//                     <div className='flex-row gap-xs icon-collection'>
//                         <i className='bi bi-suit-heart'></i>
//                         <i className='bi bi-cart-plus'></i>
//                         <i className='bi bi-x-lg' onClick={handleExpandClick}></i>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ProductCard
