import React, {useState, useEffect} from 'react';
import './product-page.scss';
import Heropic from '../../assets/img/product/hero.png';
import High from '../../assets/img/product/highlight.png';
import Button from '../../components/common/button/button.jsx';
import Productcard from '../../components/common/product-card/product-card.jsx';
import products from '../../data/products.json';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Pagination from '@mui/material/Pagination';

const ProductPage = () => {
    const [page, setPage] = useState(1);
   const itemsPerPage = 24;
   const [selectedProducts, setSelectedProducts] = useState([]);
   const handleAddToCart = (product) => {
       setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
   };
   const handleChange = (event, value) => {
       setPage(value);
       const elements = document.getElementsByClassName('prod-query-content');
        if (elements && elements[0]) {
           window.scrollTo({ top: elements[0].offsetTop, behavior: 'smooth' });
        }
   };

   const currentItems = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div className='product-page'>
            <div className='main-container flex-col'>
                <div className='section-container flex-col'>
                    <div className='hero-sct section flex-col'>
                        <div className='img-slider'>
                            <img src={Heropic} alt="hero-img" />
                        </div>
                    </div>
                </div>
                <div className="section-container flex-col">
                    <div className="prod-query-sct section flex-col align-left">
                        <div className='promo-collection-sct flex-row'>
                            <div className='collection-img flex-col'>
                                <img src={High} alt="" />
                            </div>
                            <div className='vt-divider'></div>
                            <div className='collection-content flex-col gap-ms align-left'>
                                <h3 className='h3'>GLASTING WATER TINT COLLECTION</h3>
                                <div className='prod-collection-container prod-collection-scroll'>
                                        <Carousel responsive={responsive} containerClass="carousel-container" itemClass="width-reset flex-col" slidesToSlide={1} keyBoardControl={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                                                    {products.slice(0, 8).map((product) => (
                                                        <Productcard product={product} key={product.product_id} onAddToCart={handleAddToCart} ></Productcard>
                                                    ))}
                                        </Carousel>
                                </div>
                                <p className='body-lgt collection-description'>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc.</p>
                            </div>
                        </div>
                        <div className='prod-query-content flex-row align-left'>
                            <div className="filter-container flex-col gap-ms align-left">
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="COLLECTION 1" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 2" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 3" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 4" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>CATEGORY</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="CLEANSER" btnStyle="underline-btn"></Button>
                                        <Button text="MOISTURIZER" btnStyle="underline-btn"></Button>
                                        <Button text="MASK" btnStyle="underline-btn"></Button>
                                        <Button text="LIPSTICK" btnStyle="underline-btn"></Button>
                                        <Button text="FOUNDATION" btnStyle="underline-btn"></Button>
                                        <Button text="MASCARA" btnStyle="underline-btn"></Button>
                                        <Button text="EYELINER" btnStyle="underline-btn"></Button>
                                        <Button text="BLUSH" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>BRAND</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="3CE" btnStyle="underline-btn"></Button>
                                        <Button text="ROMAN" btnStyle="underline-btn"></Button>
                                        <Button text="MERZY" btnStyle="underline-btn"></Button>
                                        <Button text="PERIPERA" btnStyle="underline-btn"></Button>
                                        <Button text="CLIO" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>PRICE RANGE</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="PRICE RANGE 1" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 2" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 3" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 4" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="vt-divider"></div>
                            <div className="prod-display flex-col align-left gap-md">
                                <div className = "product-dis-icon flex-row gap-md" >
                                    <h3 className='h3'>PRODUCT SEARCH BY INDEX</h3>
                                    <div className="product-collect3-search-bar ">
                                        <button className="product-collect3-search-btn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                        <input className="product-collect3-search-input" type="text" placeholder="Search" />
                                    </div>
                                    <div>
                                    <select id="sort" name="sort">
                                        <option value="Sort">Sort by</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="prod-grid gap-xs">
                                    {currentItems.map((product) => (
                                        <Productcard product={product} key={product.product_id} onAddToCart={handleAddToCart}></Productcard>
                                    ))}
                                </div>
                                <div className="pagination flex-col max-wdth">
                                    <div className='flex-row'>
                                        <Pagination count={Math.ceil(products.length / itemsPerPage)} page={page} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;