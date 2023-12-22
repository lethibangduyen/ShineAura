import React, { useRef, useState, useEffect } from 'react';
import "./product-description.css";

const ProductDescription = () => {
    const detailContentRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [detailContentHeight, setDetailContentHeight] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const checkScrollPosition = () => {
        setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    };

    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('scroll', checkScrollPosition);
        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

    useEffect(() => {
        if (detailContentRef.current) {
            setDetailContentHeight(detailContentRef.current.offsetHeight);
        }
    }, []);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="detail-container flex-col">
            <div className="detail-nav flex-row align-right">
                <div className="detail-nav-btn active flex-row body-bld">Product Detail</div>
                <div className="detail-nav-btn unactive flex-row body-bld">Product Ingredients</div>
                <div className="detail-nav-btn unactive flex-row body-bld">How to use</div>
            </div>
            <div className={`detail-content flex-col gap-ms ${isExpanded ? 'expanded' : ''}`} ref={detailContentRef}>
                <div className="detail-content-item flex-col gap-sm body-lgt align-left">
                <p className="content-item">The 3CE Cloud Lip Tint, now available at ShineAura, features a distinctive design with the lip body matching the color inside and a simple yet elegant copper-toned lid. As the name "Cloud" suggests, the lip tint glides on the lips with a light, cloud-like sensation. The lip tint has a smooth texture that applies evenly without accentuating lip lines or wrinkles. It has a soft and smooth texture, providing hydration without feeling sticky on the lips. The initial finish is slightly glossy, but after it sets on the lips, it creates a matte and plump effect. The pigments are quickly absorbed into the lips upon application. It has excellent color longevity, keeping the lip color intact for an extended period.</p>
                        <p className="content-item">Currently available in the following shades</p>
                        <ul className="inside content-item">
                            <li>Needful: A blend of brick red with hints of orange and brown to complement various skin tones.</li>
                            <li>Live A Little: A trendy earthy red shade.</li>
                            <li>Blossom Day: A delightful cherry blossom pink.</li>
                            <li>Immanence: A striking deep red.</li>
                            <li>Macaron Red: A classic bright red.</li>
                            <li>Active Lady: A natural nude orange.</li>
                            <li>Pinkalicious: An impressive deep pink.</li>
                            <li>Peach Tease: A fresh and lively coral orange</li>
                        </ul>
                        <p className="content-item">3CE Cloud Lip Tint, a popular cosmetic product by the South Korean beauty brand 3 Concept Eyes (3CE), has gained widespread acclaim for its innovative formula and vibrant color range. This lip tint stands out for its unique "cloud-like" texture, which feels weightless on the lips while delivering intense and long-lasting pigmentation. The lightweight yet highly pigmented formula glides on smoothly, providing a comfortable and hydrating experience. With a diverse selection of shades ranging from soft nudes to bold, statement colors, 3CE Cloud Lip Tint caters to various preferences and occasions. The product's sleek and minimalist packaging adds a touch of sophistication, reflecting the brand's commitment to both quality and aesthetics. Beauty enthusiasts appreciate the versatility and quality of 3CE Cloud Lip Tint, making it a staple in the makeup routines of those seeking a modern and vibrant lip color experience.</p>
                        <p className="content-item">3CE Cloud Lip Tint, a popular cosmetic product by the South Korean beauty brand 3 Concept Eyes (3CE), has gained widespread acclaim for its innovative formula and vibrant color range. This lip tint stands out for its unique "cloud-like" texture, which feels weightless on the lips while delivering intense and long-lasting pigmentation. The lightweight yet highly pigmented formula glides on smoothly, providing a comfortable and hydrating experience. With a diverse selection of shades ranging from soft nudes to bold, statement colors, 3CE Cloud Lip Tint caters to various preferences and occasions. The product's sleek and minimalist packaging adds a touch of sophistication, reflecting the brand's commitment to both quality and aesthetics. Beauty enthusiasts appreciate the versatility and quality of 3CE Cloud Lip Tint, making it a staple in the makeup routines of those seeking a modern and vibrant lip color experience.</p>
                        <p className="content-item">3CE Cloud Lip Tint, a popular cosmetic product by the South Korean beauty brand 3 Concept Eyes (3CE), has gained widespread acclaim for its innovative formula and vibrant color range. This lip tint stands out for its unique "cloud-like" texture, which feels weightless on the lips while delivering intense and long-lasting pigmentation. The lightweight yet highly pigmented formula glides on smoothly, providing a comfortable and hydrating experience. With a diverse selection of shades ranging from soft nudes to bold, statement colors, 3CE Cloud Lip Tint caters to various preferences and occasions. The product's sleek and minimalist packaging adds a touch of sophistication, reflecting the brand's commitment to both quality and aesthetics. Beauty enthusiasts appreciate the versatility and quality of 3CE Cloud Lip Tint, making it a staple in the makeup routines of those seeking a modern and vibrant lip color experience.</p>
                </div>
                {scrollPosition > detailContentHeight && <i className={`icon-size-20 bi bi-chevron-down ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}></i>}
            </div>
        </div>
    )
};

export default ProductDescription;
