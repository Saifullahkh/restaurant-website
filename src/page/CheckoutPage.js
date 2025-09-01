import React, { useContext, useState } from "react";
import { CartContext } from "../page/CartContext";
import { FaCreditCard, FaMapMarkerAlt, FaUser, FaLock, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    upiId: ""
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    // Generate random order number
    const newOrderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);
    
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalWithCharges = () => {
    const subtotal = parseFloat(calculateTotal());
    const deliveryFee = subtotal > 0 ? 5 : 0;
    const tax = subtotal * 0.08;
    return (subtotal + deliveryFee + tax).toFixed(2);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="success-animation mb-4">
                <FaCheckCircle size="4rem" className="text-success" />
              </div>
              <h2 className="fw-bold text-success mb-3">Order Confirmed!</h2>
              <div className="order-details-card">
                <p className="mb-2">Thank you for your order, <strong>{formData.name}</strong>!</p>
                <p className="mb-3">Your order number is: <span className="badge bg-primary">{orderNumber}</span></p>
                <p className="text-muted">You will receive a confirmation email shortly at {formData.email}</p>
                
                <div className="estimated-delivery mt-4 p-3 bg-light rounded">
                  <h6 className="mb-2">Estimated Delivery Time</h6>
                  <p className="fw-bold mb-0">30-45 minutes</p>
                </div>
                
                <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/'}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container py-5">
        <div className="row">
          {/* Checkout Steps */}
          <div className="col-lg-12 mb-4">
            <div className="checkout-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <div className="step-icon">1</div>
                <span className="step-label">Information</span>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <div className="step-icon">2</div>
                <span className="step-label">Payment</span>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <div className="step-icon">3</div>
                <span className="step-label">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            {currentStep === 1 && (
              <div className="checkout-card">
                <h4 className="checkout-title">
                  <FaUser className="me-2" />
                  Delivery Information
                </h4>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Delivery Address *</label>
                    <textarea
                      name="address"
                      className="form-control"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">City *</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        className="form-control"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-md-end justify-content-center mt-4">
                    <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="checkout-card">
                <h4 className="checkout-title">
                  <FaCreditCard className="me-2" />
                  Payment Method
                </h4>
                
                <div className="payment-methods mb-4">
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="cardPayment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label w-100" htmlFor="cardPayment">
                      <div className="d-flex align-items-center">
                        <span>Credit/Debit Card</span>
                        <div className="card-icons ms-auto">
                          <span className="card-icon visa">Visa</span>
                          <span className="card-icon mastercard">MC</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="payment-details">
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label className="form-label">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            className="form-control"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Name on Card</label>
                          <input
                            type="text"
                            name="cardName"
                            className="form-control"
                            placeholder="John Doe"
                            value={formData.cardName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label className="form-label">Expiry Date</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            className="form-control"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label className="form-label">CVV</label>
                          <input
                            type="text"
                            name="cardCvv"
                            className="form-control"
                            placeholder="123"
                            value={formData.cardCvv}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="upiPayment"
                      value="upi"
                      checked={formData.paymentMethod === "upi"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="upiPayment">
                      UPI
                    </label>
                  </div>

                  {formData.paymentMethod === "upi" && (
                    <div className="payment-details">
                      <div className="mb-3">
                        <label className="form-label">UPI ID</label>
                        <input
                          type="text"
                          name="upiId"
                          className="form-control"
                          placeholder="yourname@upi"
                          value={formData.upiId}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="codPayment"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="codPayment">
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn btn-outline-secondary" onClick={handlePrevStep}>
                    <FaArrowLeft className="me-2" />
                    Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="checkout-card">
                <h4 className="checkout-title">
                  <FaCheckCircle className="me-2" />
                  Order Summary
                </h4>
                
                <div className="order-review">
                  <div className="delivery-info mb-4 p-3 bg-light rounded">
                    <h6 className="mb-2">Delivery To</h6>
                    <p className="mb-1">{formData.name}</p>
                    <p className="mb-1">{formData.address}</p>
                    <p className="mb-0">{formData.city}, {formData.zipCode}</p>
                    <p className="mb-0">{formData.phone}</p>
                  </div>

                  <div className="payment-info mb-4 p-3 bg-light rounded">
                    <h6 className="mb-2">Payment Method</h6>
                    <p className="mb-0 text-capitalize">
                      {formData.paymentMethod === "card" ? "Credit/Debit Card" : 
                       formData.paymentMethod === "upi" ? "UPI" : "Cash on Delivery"}
                    </p>
                  </div>

                  <div className="order-items">
                    <h6 className="mb-3">Your Order</h6>
                    {cart.map((item) => (
                      <div key={item.id} className="order-item d-flex justify-content-between align-items-center mb-2">
                        <div className="item-info">
                          <span className="item-name">{item.name}</span>
                          <span className="item-quantity text-muted">x {item.quantity}</span>
                        </div>
                        <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn btn-outline-secondary" onClick={handlePrevStep}>
                    <FaArrowLeft className="me-2" />
                    Back
                  </button>
                  <button type="button" className="btn btn-success " onClick={handleSubmit}>
                    Confirm Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="order-summary-card sticky-top">
              <h5 className="mb-4">Order Summary</h5>
              
              <div className="order-items mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="order-summary-item d-flex justify-content-between mb-2">
                    <div className="item-desc">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity text-muted">x {item.quantity}</span>
                    </div>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="cost-breakdown">
                <div className="cost-line d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="cost-line d-flex justify-content-between mb-2">
                  <span>Delivery Fee</span>
                  <span>{cart.length > 0 ? "$5.00" : "$0.00"}</span>
                </div>
                <div className="cost-line d-flex justify-content-between mb-2">
                  <span>Tax</span>
                  <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="total-cost d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>${getTotalWithCharges()}</strong>
              </div>
              
              <div className="security-note">
                <p className="text-muted small">
                  {/* <Flock className="me-1" /> */}
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-page {
          background-color: #f8f9fa;
          min-height: 100vh;
        }
        
        .checkout-steps {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2rem;
          position: relative;
        }
        
        .step:not(:last-child):after {
          content: '';
          position: absolute;
          top: 20px;
          right: -30px;
          width: 60px;
          height: 2px;
          background-color: #dee2e6;
        }
        
        .step.active:not(:last-child):after {
          background-color: #0d6efd;
        }
        
        .step-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #dee2e6;
          color: #6c757d;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .step.active .step-icon {
          background-color: #0d6efd;
          color: white;
        }
        
        .step-label {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        .step.active .step-label {
          color: #0d6efd;
          font-weight: 500;
        }
        
        .checkout-card, .order-summary-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .checkout-title {
          font-weight: 600;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          align-items: center;
        }
        
        .order-summary-card {
          position: sticky;
          top: 20px;
        }
        
        .order-summary-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f1f1;
        }
        
        .item-desc {
          display: flex;
          flex-direction: column;
        }
        
        .item-name {
          font-weight: 500;
        }
        
        .item-quantity {
          font-size: 0.85rem;
        }
        
        .summary-divider {
          height: 1px;
          background-color: #e9ecef;
          margin: 1rem 0;
        }
        
        .cost-line {
          font-size: 0.95rem;
        }
        
        .total-cost {
          font-size: 1.1rem;
        }
        
        .payment-methods {
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 1rem;
        }
        
        .form-check {
          padding: 0.75rem;
          border-radius: 8px;
          transition: background-color 0.2s;
        }
        
        .form-check:hover {
          background-color: #f8f9fa;
        }
        
        .payment-details {
          background-color: #f8f9fa;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .card-icons {
          display: flex;
          gap: 0.5rem;
        }
        
        .card-icon {
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          background-color: #f1f1f1;
        }
        
        .checkout-success {
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .order-details-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        
        .success-animation {
          animation: scaleUp 0.5s ease;
        }
        
        @keyframes scaleUp {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .checkout-steps { 
            align-items: flex-start;
            gap: 0.6rem;
          }
          .step{
            padding: 0 0.8rem;
          }
         .step:not(:last-child):after {
            left: 100%;
            transform: translateX(-50%);
            width: 60px;       
            right: auto;      /* reset right */
          }
          
        }
      `}</style>
    </div>
  );
};

export default CheckoutPage;