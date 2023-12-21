import React from 'react';
import "./payment-page.css";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <div className="body path">HOME/CART</div>
      <div className="main-UI">
        <div className="payment-detail">
          <div className="h4 title">Payment Detail</div>
          <div className="payment-table">
            <div className="action-bar-parent">
              <div className="card">
                <div className="body-bld-white">Credit/Debit card</div>
              </div>
              <div className="action-bar-child body">
                Paypal
              </div>
              <div className="action-bar-child body">
                E-Wallet
              </div>
              <div className="action-bar-child body">
                COD
              </div>
            </div>
            <div className="selection-table">
              <div className="left-info">
                <div className="VCB">
                  <p className="body card-text">Vietcombank</p>
                  <p className=" card-textbody">*** **** **99</p>

                </div>
                <div className="vietin">
                  <p className="body card-text">Vietinbank</p>
                  <p className="body card-text">*** **** **99</p>
                  <i class="bi bi-exclude"></i>
                  {/* <exclude /> */}
                </div>
                <div className="new-card">
                  <p className="body card-text">New</p>
                  <img src="#" alt="" />
                </div>
              </div>
              <div className="right-frame">
                <div className="card-num">
                  <label htmlFor="" className="body">Card Number</label>
                  <div className="form-card-num">
                    <input type="text" inputmode="numeric" className="fill-num" />
                    <select className="card-type-list body">
                      <option value="credit" selected>Card Type</option>
                      <option value="debit">Debit Card</option>
                    </select>
                  </div>

                </div>
                <div className="name-fill">
                  <label htmlFor="" className="body">Name</label>
                  <input type="text" className="form-name-fill" />
                </div>
                <div className="expi-cvv">
                  <div className="expi-date">
                    <label htmlFor="" className="body">Expiration Date</label>
                    <input type="text" className="expi-fill" />
                  </div>
                  <div className="cvv">
                    <label htmlFor="" className="body">CVV</label>
                    <input type="text" className="cvv-fill" />
                  </div>
                </div>
                <div className="btn">
                  <div className="action-btn button_2">CONFIRM</div>
                  <div className="action-btn button_2">CANCEL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>



  );
};

export default PaymentPage;