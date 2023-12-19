import React from 'react';
import '../Assets/css/global.css'
import './product-card.scss'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react'

const ProductCard = ({}) => {
    const product = {
        "product_url": "https://nuty.vn/trang-diem/trang-diem-mat/phan-mat/bang-phan-mat-co-ban-hang-ngay-nature-republic-blooming-mood-26g",
        "product_id": "8806173475445",
        "product_name": "Bảng Phấn Mắt Cơ Bản Hàng Ngày Nature Republic  Blooming Mood (2.6g) - #02 Rosy",
        "product_type": "Phấn Mắt",
        "price": 215,
        "images": [
          "https://nuty.vn/Data/Sites/1/Product/29149/z4891856347478_320f196722e4d537ffa3ada992b501f6.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4889599308399_5afc67fcd8ebc719c6083d9025e003ee.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4889599259992_08fd40eb2dd37456e561a9d34d19efa7.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4891856356887_c80433fa13fda02d464d5bb96373129c.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4891856347478_320f196722e4d537ffa3ada992b501f6.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4889599308399_5afc67fcd8ebc719c6083d9025e003ee.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4889599259992_08fd40eb2dd37456e561a9d34d19efa7.jpg",
          "https://nuty.vn/Data/Sites/1/Product/29149/z4891856356887_c80433fa13fda02d464d5bb96373129c.jpg",
          "https://nuty.vn/Data/Sites/1/Product/28902/z4773161730247_e4225ff89f547cc314fdfbb0916d6139.jpg",
          "https://nuty.vn/Data/Sites/1/Product/28798/z4635400015624_0219c6adc7764dd7908e7e19afd09d4f.jpg",
          "https://nuty.vn/Data/Sites/1/Product/28928/z4767129684998_da8913def5fc6119a02ca5b8a9b42a06.jpg"
        ],
        "variants": [
          "#02 Rosy",
          "#03 Cool Pink",
          "#04 Coral"
        ],
        "brands": "Nature Republic",
        "tab_data": {
          "description": [
            "Bảng phấn mắt Nature Republic Daily Basic Palette  với các gam màu cơ bản thích hợp cho lớp trang điểm hàng ngày của bạn.",
            "Vui lòng xem trên bao bì",
            "Bao gồm 4 ô màu: màu lì và màu nhũ",
            "Màu 02 Rosy:  Tập hợp các gam màu nhẹ nhàng, lãng mạn.",
            "Màu 03 Cool Pink:  Một bảng màu với các sắc hồng tươi tắn giúp tô điểm thêm sự đáng yêu cho khuôn mặt của bạn.",
            "Màu 04 Coral:  Bảng phấn mắt với các gam màu cam giúp mang lại lớp trang điểm tươi mát, dễ thương cho khuôn mặt của bạn.",
            "- Bảng phấn mắt gồm các màu cơ bản dùng cho trang điểm hàng ngày và cho cả những người mới bắt đầu trang điểm.",
            "- Các màu lì có chất phấn mịn màng và độ bám chặt mang lại lớp trang điểm tươi tắn và không lem.",
            "- Các màu nhũ với các hạt nhũ đa dạng về kích thước giúp đôi mắt trông hài hòa và tự nhiên",
            "- Bước 1:  Dùng cọ tán màu sáng lên bầu mắt trên và dưới để làm đều màu bề mặt và vùng da quanh mắt.",
            "- Bước 2:  Dùng cọ tán màu trung bình lên bầu mắt tới sát chân mi để tạo sự chuyển màu.",
            "- Bước 3:  Tán màu đậm lên mí mắt và góc 1/3 đuôi mắt.",
            "- Bước 4:  Thoa màu nhũ lên trên mí mắt hoặc khóe mắt trong để mắt long lanh hơn.",
            "Xuất xứ: Hàn Quốc",
            "Thương hiệu: Black Rouge"
          ],
          "ingredients": [
            "THÀNH PHẦN:  \nVui lòng xem trên bao bì",
            "Bao gồm 4 ô màu: màu lì và màu nhũ"
          ],
          "effects": [
            "CÔNG DỤNG:",
            "Màu 02 Rosy:  Tập hợp các gam màu nhẹ nhàng, lãng mạn.",
            "Màu 03 Cool Pink:  Một bảng màu với các sắc hồng tươi tắn giúp tô điểm thêm sự đáng yêu cho khuôn mặt của bạn.",
            "Màu 04 Coral:  Bảng phấn mắt với các gam màu cam giúp mang lại lớp trang điểm tươi mát, dễ thương cho khuôn mặt của bạn.",
            "- Bảng phấn mắt gồm các màu cơ bản dùng cho trang điểm hàng ngày và cho cả những người mới bắt đầu trang điểm.",
            "- Các màu lì có chất phấn mịn màng và độ bám chặt mang lại lớp trang điểm tươi tắn và không lem.",
            "- Các màu nhũ với các hạt nhũ đa dạng về kích thước giúp đôi mắt trông hài hòa và tự nhiên"
          ],
          "instruction": [
            "HƯỚNG DẪN SỬ DỤNG:",
            "- Bước 1:  Dùng cọ tán màu sáng lên bầu mắt trên và dưới để làm đều màu bề mặt và vùng da quanh mắt.",
            "- Bước 2:  Dùng cọ tán màu trung bình lên bầu mắt tới sát chân mi để tạo sự chuyển màu.",
            "- Bước 3:  Tán màu đậm lên mí mắt và góc 1/3 đuôi mắt.",
            "- Bước 4:  Thoa màu nhũ lên trên mí mắt hoặc khóe mắt trong để mắt long lanh hơn."
          ]
        }};
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
                <img src={product.images[0]} alt="Product Image" className='prod-img'/>
                </div>
                <div className='flex-row prod-info bg-ivory'>
                    <div className='flex-col gap-sm left-bar'>
                        <div className='flex-col gap-2xs prod-n-pr'>
                        <div className='prod-name'>{product.product_name}</div>
                            <div className='prod-price'>{product.price + ".000 đ"}</div>
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
                <div className='flex-col gap-xs align-left'>
                    <div className='flex-col gap-2xs prod-n-pr-review align-left'>
                    <p className='prod-brand'>{product.brand}</p>
                        <p className='prod-name'>{product.name}</p>
                        <div className='flex-row prod-review gap-2xs'>
                        {product.tab_data.description.map((para, index) => (
                                        <p key={index} className='para'>
                                        {para}
                                        </p>
                            ))}
                            <p className='review-rate'>000 review</p>
                        </div>
                    </div>
                    <div className='prod-price'>{product.price}</div>
                    <div className='prod-des'>
                        <p></p>
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

    )
}

export default ProductCard