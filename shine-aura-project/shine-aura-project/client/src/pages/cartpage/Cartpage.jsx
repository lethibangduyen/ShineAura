import React from 'react';
import './Cartpage.css';
import Logo from '../../assets/img/product/product-image.png';

const Cartpage = () => {
    const numberOfSelectedProducts = 3;

    const createSelectedProductsArray = () => {
        const array = [];
        for (let i = 0; i < numberOfSelectedProducts; i++) {
            array.push(i);
        }
        return array;
    };

    const createProductsArray = () => {
        const array = [];
        for (let i = 0; i < numberOfSelectedProducts; i++) {
            array.push(i);
        }
        return array;
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
                    {createSelectedProductsArray().map((index) => (
                        <div key={index} className="CartPageProduct flex-row ">
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
                                            <span className="NameOProduct btn-text ">Product Name</span>
                                            <div className="ProductSub flex-row gap-sm align-left">
                                                <p className="ProductSubLeft body-em  ">$9.99</p>
                                                <p className="ProductSubRight body-bld ">Instock/Outstock</p>
                                            </div>
                                        </div>
                                        <div className="ProductButtonInline flex-row gap-xs align-left">
                                            <div className="ProductButtonInlineLeft gap-xs">
                                                <div className="QuantityButtons flex-row gap-xs input-btn ">
                                                    <button className="ButtonQuality">
                                                        <span>-</span>
                                                    </button>
                                                    <span className="QuantityValue">1</span>
                                                    <button className="ButtonQuality">
                                                        <span>+</span>
                                                    </button>
                                                </div>

                                                <div className="DropdownButton ButtonColor input-btn">
                                                    <span>COLOR</span>
                                                    <i className="bi bi-chevron-down"></i>
                                                    <div className="DropdownContent">
                                                        <div className="ColorOption">Red</div>
                                                        <div className="ColorOption">Blue</div>
                                                        <div className="ColorOption">Green</div>
                                                    </div>
                                                </div>

                                                <div className="DropdownButton ButtonVersion input-btn">
                                                    <span>VERSION</span>
                                                    <i className="bi bi-chevron-down"></i>
                                                    <div className="DropdownContent">
                                                        <div className="VersionOption">Standard</div>
                                                        <div className="VersionOption">Premium</div>
                                                        <div className="VersionOption">Deluxe</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ProductButtonInlineRight">
                                                <button className="ButtonSave">
                                                    <i className="bi bi-trash3"></i>
                                                    <span>Save</span>
                                                </button>
                                                <button className="ButtonDelete">
                                                    <i className="bi bi-heart"></i>
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ProductPrice">
                                    <p>$9.99</p>
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
            <div className="order-detail">
              <div className="body-sml">Product Name 1 - Color # - Version #</div>
              <div className="body-sml">9.99</div>
            </div>
            <div className="order-detail">
              <div className="body-sml">Product Name 1 - Color # - Version #</div>
              <div className="body-sml">9.99</div>
            </div>
            <div className="order-detail">
              <div className="body-sml">Product Name 1 - Color # - Version #</div>
              <div className="body-sml">9.99</div>
            </div>
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
            <div className="sub-line">
              <div className="body-sml left-item">Discount</div>
              <div className="body-sml">-5.99 &#40;20%&#41;</div>
            </div>
            <div className="sub-line">
              <div className="body-sml left-item">Tax</div>
              <div className="body-sml">2.99 &#40;10%&#41;</div>
            </div>
          </div>
          <div className="total">
            <div className="total-title body-bld">Total</div>
            <div className="total-cost body-bld">$26.99</div>
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
}

export default Cartpage;
