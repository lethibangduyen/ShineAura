import React, { useState, useEffect } from 'react';
import './Productcard.css'; // Import your CSS styles

const Productcard = () => {
  const [products, setProducts] = useState([]);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./Components/Assets/Data/Makeup.json'); // Adjust the path accordingly
        const data = await response.json();
        setProducts(data.Lipstick);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount

  const showPopup = (product) => {
    setPopupData(product);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div>
      <div id="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-img">
              <img src={product.img} alt="Product Image" />
            </div>
            <div className="container">
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="group-icon">
                <button onClick={() => showPopup(product)}>
                  <i className="bi bi-check2-square"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupData && (
        <div id="popup" className="popup">
          <div className="main-wrapper">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={popupData.img} alt="watch" />
                </div>
              </div>
              <div className="product-div-right">
                <div className="content">
                  <span className="product-name">{popupData.name}</span>
                  <p className="product-price">{popupData.price}</p>
                  <p className="product-description">{popupData.description}</p>
                  <span className="color">COLORS</span>
                  <div className="product-version">
                    <span>VERSIONS</span>
                    <span>{popupData.version}</span>
                  </div>
                  <div className="btn-groups">
                    <button type="button" className="add-cart-btn">
                      <i className="fas fa-shopping-cart"></i>add to cart
                    </button>
                    <button type="button" className="buy-now-btn">
                      <i className="fas fa-wallet"></i>buy now
                    </button>
                  </div>
                </div>
                <div className="popup-icon">
                  <button>
                    <i className="bi bi-heart"></i>
                  </button>
                  <button>
                    <i className="bi bi-cart-plus"></i>
                  </button>
                  <button onClick={closePopup}>
                    <i className="bi bi-x-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productcard;
