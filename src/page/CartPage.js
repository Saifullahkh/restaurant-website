import React, { useContext, useState } from "react";
import { CartContext } from "../page/CartContext";
import { FaTrash, FaPlus, FaMinus, FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // prevent 0 quantity
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="cart-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <h2 className="fw-bold mb-0" style={{ 
            color: "#2c3e50", 
            fontSize: "2.2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            Your Shopping Cart
          </h2>
              <span className="badge bg-primary ms-3">{cart.length} items</span>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart text-center py-5">
                <div className="empty-cart-icon mb-4">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                      stroke="#6c757d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="#6c757d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                      stroke="#6c757d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-muted">Your cart is empty</h4>
                <p className="text-muted">Add some delicious items to get started!</p>
                <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item card mb-3" key={item.id}>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img
                            src={item.image}
                            className="cart-item-img img-fluid rounded"
                            alt={item.name}
                            style={{ height: "130px",  objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-5">
                          <h5 className="cart-item-title">{item.name}</h5>
                          <p className="cart-item-desc text-muted">
                            {item.description || "Delicious food item"}
                          </p>
                          <p className="cart-item-address">
                            <small className="text-muted">From: {item.address}</small>
                          </p>
                        </div>
                        <div className="col-md-2">
                         <div className="quantity-controls d-flex align-items-center">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                              <FaMinus />
                            </button>
                            <span className="mx-2 quantity-display">{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                              <FaPlus />
                            </button>
                          </div>

                        </div>
                        <div className="col-md-2 text-end">
                          <div className="cart-item-price fw-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="mt-2">
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="cart-summary card sticky-top">
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>{cart.length > 0 ? "$5.00" : "$0.00"}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Tax</span>
                  <span>${(calculateTotal() * 0.08).toFixed(2)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>
                    $
                    {cart.length > 0
                      ? (
                          parseFloat(calculateTotal()) +
                          5 +
                          parseFloat(calculateTotal()) * 0.08
                        ).toFixed(2)
                      : "0.00"}
                  </strong>
                </div>

                {/* ✅ Checkout Button Disabled if Cart Empty */}
                <Link
                  to={cart.length > 0 ? "/checkout" : "#"}
                  className={`btn btn-primary w-100 py-3 checkout-btn ${
                    cart.length === 0 ? "disabled" : ""
                  }`}
                  onClick={() => {
                    if (cart.length === 0) return;
                    setIsProcessing(true);
                  }}
                >
                  {isProcessing ? (
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <FaCreditCard className="me-2" />
                  )}
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
                </Link>

                {cart.length > 0 && (
                  <div className="mt-3">
                    <p className="text-muted small">
                      <i className="fas fa-lock me-1"></i>
                      Your payment information is secure
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles remain same */}
    </div>
  );
};

export default CartPage;
