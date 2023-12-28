import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./payment-page.scss";
import { Link, useLocation } from 'react-router-dom';

const PaymentPage = () => {

  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleConfirmOrder = () => {
    setTimeout(() => {
      setShowSuccessMessage(true);
    }, 2000);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedProductIds = searchParams.get('selectedProductIds');
    if (selectedProductIds) {
      const ids = selectedProductIds.split(',');

      // Gọi API để lấy dữ liệu sản phẩm từ trang cơ
      axios.get(`YOUR_API_ENDPOINT/products?ids=${selectedProductIds}`)
        .then(response => {
          setSelectedProducts(response.data); // Cập nhật state với dữ liệu từ API
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [location.search]);

  const fetchProductInfoById = async (productId) => {
    // Thực hiện gọi API hoặc xử lý để lấy thông tin sản phẩm từ productId
    // Ví dụ: Gọi API backend để lấy thông tin sản phẩm từ productId
    const response = await fetch(`YOUR_API_ENDPOINT/products/${productId}`);
    if (response.ok) {
      const productData = await response.json();
      return productData;
    } else {
      throw new Error('Failed to fetch product information');
    }
  };

  const renderSelectedProducts = () => {
    if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
      return selectedProducts.map((product) => (
        <div key={product.id} className="order-detail">
          <div className="body-sml">{`${product.name} - Color ${product.color} - Version ${product.version}`}</div>
          <div className="body-sml">{`$${(product.price * product.quantity).toFixed(2)}`}</div>
        </div>
      ));
    }
    return null; // Hoặc thực hiện xử lý khác khi selectedProducts không phải là mảng hoặc rỗng
  };
  


  const calculateSubtotal = () => {
    if (selectedProducts && Array.isArray(selectedProducts) && selectedProducts.length > 0) {
      return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
    } else {
      return 0; // Trả về 0 nếu selectedProducts không tồn tại hoặc không phải là một mảng hợp lệ
    }
  };


  const calculateDelivery = () => {
    return 5.00;
  };

  const calculateDiscount = (subtotal) => {
    return subtotal * 0.20; // 20% discount
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.10; // 10% tax
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const delivery = calculateDelivery();
    const discount = calculateDiscount(subtotal);
    const tax = calculateTax(subtotal);
    return subtotal + delivery - discount + tax;
  };

  return (
    <div className="payment-page">

      <div className="LinkADD">
        <Link className="LinkOB" to="/">
          HOME
        </Link>
        <span> / </span>
        <Link className="LinkOB" to="/cart">
          CART
        </Link>
      </div>

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
                  <i className="bi bi-exclude"></i>
                </div>
                <div className="vietin">
                  <p className="body card-text">Vietinbank</p>
                  <p className="body card-text">*** **** **99</p>
                  <i className="bi bi-exclude"></i>
                  {/* <exclude /> */}
                </div>
                <div className="new-card">
                  <p className="body card-text">New</p>
                  <i className="bi bi-plus-lg"></i>
                </div>
              </div>
              <div className="right-frame">
                <div className="card-num">
                  <label htmlFor="" className="body">Card Number</label>
                  <div className="form-card-num">
                    <input type="text" inputMode="numeric" className="fill-num" />
                    <select className="card-type-list body" defaultValue="credit">
                      <option value="credit">Card Type</option>
                      <option value="debit">Credit Card</option>
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
                  <div className="action-btn button_2">
                    <Link to="/cart" className='LinkBut'>
                      <button className='ButtonConfirm' onClick={handleConfirmOrder}>
                        <i className="bi bi-check-circle"></i>
                        <span>CONFIRM</span></button>
                    </Link>
                  </div>
                  <div className="action-btn button_2">
                    <Link to="/cart" className='LinkBut'>
                      <button className='ButtonCancel'>
                        <i className="bi bi-x-circle"></i>
                        <span>CANCEL</span>
                      </button>
                    </Link>
                  </div>
                </div>

                {showSuccessMessage && (
                  <div className="success-message">
                    <p>Đặt hàng thành công!</p>
                  </div>
                )}
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
              <div className="body-bld OST" >Order Summary</div>
              <div className="body-bld">Price</div>
            </div>

            {renderSelectedProducts()}
          </div>

          <div className="subtotal">
            <div className="body-bld">Subtotal</div>
            <div className="sub-line">
              <div className="body-sml left-item">Delivery</div>
              <div className="body-sml">{calculateDelivery().toFixed(2)}</div>
            </div>
            <div className="sub-line">
              <div className="body-sml left-item">Discount</div>
              <div className="body-sml">- {calculateDiscount(calculateSubtotal()).toFixed(2)} (20%)</div>
            </div>
            <div className="sub-line">
              <div className="body-sml left-item">Tax</div>
              <div className="body-sml">{calculateTax(calculateSubtotal()).toFixed(2)} (10%)</div>
            </div>
          </div>
          <div className="total">
            <div className="total-title body-bld">Total</div>
            <div className="total-cost body-bld">{`$${calculateTotal().toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;