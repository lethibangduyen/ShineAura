
// import React from 'react';
// import '../Assets/css/global.css'
// import './product-card.scss'

// import 'bootstrap-icons/font/bootstrap-icons.css'

// import { useState } from 'react'

// const ProductCard = ({ product }) => {
//     product = { 
//         prodUrl: 'https://www.google.com.vn',
//         prodName: 'Product Name',
//         prodId: '0983053410',
//         productType: 'K21411',
//         prodImages: '../../Assets/Media/Product/Product-Image.png',
//         prodPrice: '250',
//         prodVars: ['red', 'blue', 'green'],
//         prodBrand: 'UEL',
//         tabData: {
//             desc: [
//                 "Son Nhũ Bóng Ofélia Sugarplum Mintyice Sparkling Gloss (3.7g)",
//                 "SUGARPLUM MintyIce Sparkling Gloss là dòng son đến từ thương hiệu OFÉLIA với chất son nhũ bóng thuần chay, tạo hiệu ứng môi ngậm nước cùng các hạt nhũ đa sắc tạo sự nổi bật, thu hút ánh nhìn.",
//                 "Với thiết kế “Minty” với tông màu xanh mint mang đến sự tươi mới, refresh cùng với “Ice” biểu trưng cho sự mạnh mẽ, khác biệt, chúng mình mong muốn thông qua collection này các Sugarboos sẽ càng thêm tự tin hơn, thể hiện chất riêng và tự do Flexing nhất có thể! MintyIce chính là vũ khí bí mật, sự khích lệ và là supporter lớn nhất của Sugarboos mỗi ngày.",
//                 "THÀNH PHẦN",
//                 "-  Thành phần thuần chay, lành tính, không thử nghiệm trên động vật.",
//                 "-  Chiết xuất trái Lựu: Chống oxi hoá, giúp cải thiện sự xuất hiện của các dấu hiệu lão hoá bằng cách ức chế các tác nhân gây hại từ môi trường.",
//                 "-  Chiết xuất Táo tây: Có khả năng làm dịu và làm sáng màu môi.",
//                 "CÔNG DỤNG",
//                 "- Chất s on bóng dạng nước có nhũ cho nền môi căng mọng, lấp lánh, lên môi cực mướt không gây bết dính, không nặng môi mang lại cảm giác thoải mái khi thoa son.",
//                 "- Đặc biệt son mang đến h iệu ứng the mát mới lạ khi thoa trên môi nhờ hương trà bạc hà.",
//                 "-  4 tông màu có nhũ phù hợp với nhiều hoàn cảnh sử dụng.",
//                 "Nuty có sẵn 2  tone màu cho bạn lựa chọn",
//                 "# 02 FLEX:  Base Nude nâu lạnh - Nhũ xanh (Cool Nudish Brown - Green & Blue pearl)",
//                 "# 03 SLAY:  Base Hồng tím + Nhũ đa sắc (Soft Lilac - Multi-color pearl)",
//                 "HƯỚNG DẪN SỬ DỤNG",
//                 "-  Thoa từng lớp cho đến khi đạt hiệu ứng mong muốn.",
//                 "-  Có thể dùng trực tiếp lên môi hoặc dùng trên lớp son màu.",
//                 "Xuất xứ: Việt Nam",
//                 "Thương hiệu: OFÉLIA"
//               ], 
//             ings: [
//                 "THÀNH PHẦN:",
//                 "-  Thành phần thuần chay, lành tính, không thử nghiệm trên động vật.",
//                 "-  Chiết xuất trái Lựu: Chống oxi hoá, giúp cải thiện sự xuất hiện của các dấu hiệu lão hoá bằng cách ức chế các tác nhân gây hại từ môi trường.",
//                 "-  Chiết xuất Táo tây: Có khả năng làm dịu và làm sáng màu môi."
//               ], 
//             eff: [
//                 "CÔNG DỤNG:",
//                 "- Chất s on bóng dạng nước có nhũ cho nền môi căng mọng, lấp lánh, lên môi cực mướt không gây bết dính, không nặng môi mang lại cảm giác thoải mái khi thoa son.",
//                 "- Đặc biệt son mang đến h iệu ứng the mát mới lạ khi thoa trên môi nhờ hương trà bạc hà.",
//                 "-  4 tông màu có nhũ phù hợp với nhiều hoàn cảnh sử dụng."
//               ], 
//             ins: [
//                 "HƯỚNG DẪN SỬ DỤNG:",
//                 "-  Thoa từng lớp cho đến khi đạt hiệu ứng mong muốn.",
//                 "-  Có thể dùng trực tiếp lên môi hoặc dùng trên lớp son màu."
//               ]
//         },
//     }
    
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
//                 <img src={product.prodImages[0]} alt="Product Image" className='prod-img'/>
//                 </div>
//                 <div className='flex-row prod-info bg-ivory'>
//                     <div className='flex-col gap-sm left-bar'>
//                         <div className='flex-col gap-2xs prod-n-pr'>
//                         <div className='prod-name'>{product.prodName}</div>
//                             <div className='prod-price'>{product.prodPrice + ".000 đ"}</div>
//                         </div>
//                         <div className='flex-row gap-2xs color-vars'>
//                         {product.prodVars.map((variant, index) => (
//                                 <div key={index} className='color-var'>
//                                 {variant}
//                                 </div>
//                             ))}
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
//                     <p className='prod-brand'>{product.prodBrand}</p>
//                         <p className='prod-name'>{product.prodName}</p>
//                         <div className='flex-row prod-review gap-2xs'>
//                             {product.tabData.desc.map((para, index) => (
//                                             <p key={index} className='para'>
//                                             {para}
//                                             </p>
//                                 ))}
//                             <p className='review-rate'>000 review</p>
//                         </div>
//                     </div>
//                     <div className='prod-price'>{product.prodPrice}</div>
//                     <div className='prod-des'>
//                         <p></p>
//                     </div>
//                     <div className='flex-col gap-2xs align-left color-select'>
//                         <p className='select-label'>Colors</p>
//                         <div className='flex-row gap-2xs color-vars'>
//                             {product.prodVars.map((variant, index) => (
//                                     <div key={index} className='color-var'>
//                                     {variant}
//                                     </div>
//                                 ))}
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

// import React, { useState } from 'react';
// import '../Assets/css/global.css';
// import './product-card.scss';

// import 'bootstrap-icons/font/bootstrap-icons.css';

// const ProductCard = ({ product }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const handleExpandClick = () => {
//         setIsExpanded((prevExpanded) => !prevExpanded);
//     };

//     if (!product || !product.images) {
//         return null;
//     }

//     const containerClassName = isExpanded
//         ? 'flex-row prod-container prod-exp'
//         : 'flex-row prod-container prod-c';

//     return (
//         <div className={containerClassName}>
//             <div className='flex-col'>

//                 <div className='flex-row prod-img-container'>

//                 <div className='flex-col prod-img-container'>
//                     <img src={product.images[0]} alt="Product-Image" className='prod-img' />
//                 </div>
//                 <div className='flex-row prod-info bg-ivory'>
//                     <div className='flex-col gap-sm left-bar'>
//                         <div className='flex-col gap-2xs prod-n-pr'>
//                             <div className='prod-name'>{product.product_name}</div>
//                             <div className='prod-price'>{product.price + ".000 đ"}</div>
//                         </div>
//                         <div className='flex-row gap-2xs color-vars'>
//                             {product.variants.map((variant, index) => (
//                                 <div key={index} className='color-var'>
//                                     {variant}
//                                 </div>
//                             ))}
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
//                         <p className='prod-brand'>{product.brands}</p>
//                         <p className='prod-name'>{product.product_name}</p>
//                         <div className='flex-row prod-review gap-2xs'>
//                             {product.tab_data.description.map((para, index) => (
//                                 <p key={index} className='para'>
//                                     {para}
//                                 </p>
//                             ))}
//                             <p className='review-rate'>000 review</p>
//                         </div>
//                     </div>
//                     <div className='prod-price'>{product.price}</div>
//                     <div className='prod-des'>
//                         <p></p>
//                     </div>
//                     <div className='flex-col gap-2xs align-left color-select'>
//                         <p className='select-label'>Colors</p>
//                         <div className='flex-row gap-2xs color-vars'>
//                             {product.variants.map((variant, index) => (
//                                 <div key={index} className='color-var'>
//                                     {variant}
//                                 </div>
//                             ))}
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
//     );
// };

// export default ProductCard;
import React from 'react';
import '../Assets/css/global.css'
import './product-card.scss'

import 'bootstrap-icons/font/bootstrap-icons.css'

import ProductImage from '../Assets/Media/Product/Product-Image.png'
import { useState } from 'react'

const ProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    const containerClassName = isExpanded
        ? 'flex-row prod-container prod-exp'
        : 'flex-row prod-container prod-c';


    return (
        <div className={containerClassName}>
            <div className='flex-col'>

                <div className='flex-row prod-img-container'>

                <div className='flex-col prod-img-container'>
                    <img src={ProductImage} alt="Product" className='prod-img'/>
                </div>
                <div className='flex-row prod-info bg-ivory'>
                    <div className='flex-col gap-sm left-bar'>
                        <div className='flex-col gap-2xs prod-n-pr'>
                            <div className='prod-name'>3CE HAZY LIP CLAY</div>
                            <div className='prod-price'>$20 USD</div>
                        </div>
                        <div className='flex-row gap-2xs color-vars'>
                            <div className='color-var'></div>
                            <div className='color-var'></div>
                            <div className='color-var'></div>
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
                <div className='flex-col gap-xs align-left'>
                    <div className='flex-col gap-2xs prod-n-pr-review align-left'>
                        <p className='prod-collection'>COLLECTION NAME</p>
                        <p className='prod-name'>3CE HAZY LIP CLAY</p>
                        <div className='flex-row prod-review gap-2xs'>
                            <div className='review-stars flex-row'>
                                <i className='bi bi-star square-icon'></i>
                                <i className='bi bi-star square-icon'></i>
                                <i className='bi bi-star square-icon'></i>
                                <i className='bi bi-star square-icon'></i>
                                <i className='bi bi-star square-icon'></i>
                            </div>
                            <p className='review-rate'>000 review</p>
                        </div>
                    </div>
                    <div className='prod-price'>$9.99</div>
                    <div className='prod-des'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque tellus, venenatis at tincidunt sed, fermentum eu nibh. Mauris aliquet feugiat ex imperdiet tristique. Quisque vehicula, turpis at accumsan accumsan.</p>
                    </div>
                    <div className='flex-col gap-2xs align-left color-select'>
                        <p className='select-label'>Colors</p>
                        <div className='flex-row gap-2xs color-vars'>
                            <div className='color-var'></div>
                            <div className='color-var'></div>
                            <div className='color-var'></div>
                        </div>
                    </div>
                    <div className='flex-col gap-2xs align-left version-select'>
                        <div className='select-label'>Version</div>
                        <div className='version-vars flex-row gap-xs'>
                            <div className='version-var'>Version 1</div>
                            <div className='version-var'>Version 2</div>
                        </div>
                    </div>
                    <div className='flex-row gap-xs btn-collection'>
                        <button></button>
                        <button></button>
                    </div>
                    <div className='flex-row gap-xs icon-collection'>
                        <i className='bi bi-suit-heart'></i>
                        <i className='bi bi-cart-plus'></i>
                        <i className='bi bi-x-lg' onClick={handleExpandClick}></i>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
} 

export default ProductCard ;
