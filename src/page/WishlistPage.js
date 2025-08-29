import React, { useContext, useState } from "react";
import { WishlistContext } from "./WishlistContext";
import { CartContext } from "./CartContext";
import { FaTrash, FaShoppingCart, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleAddToCart = (item) => {
  addToCart(item);
  removeFromWishlist(item.id);  // remove from wishlist
  toast.success(`${item.name} added to cart!`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};


  const handleRemoveFromWishlist = (id, name) => {
    removeFromWishlist(id);
    toast.error(`${name} removed from wishlist`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="wishlist-page" style={{ minHeight: "70vh", padding: "2rem 0", backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0" style={{ 
            color: "#2c3e50", 
            fontSize: "2.2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <FaHeart style={{ color: "#e74c3c" }} /> My Wishlist
          </h2>
          <span className="badge bg-primary rounded-pill p-2">
            {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <div style={{ fontSize: "5rem", color: "#dee2e6", marginBottom: "1rem" }}>
              <FaHeart />
            </div>
            <h4 className="text-muted mb-3">Your wishlist is empty</h4>
            <p className="text-muted">Start adding items you love to your wishlist!</p>
            <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="row">
            {wishlist.map((item) => (
              <div 
                className="col-xl-4 col-lg-4 col-md-6 mb-4" 
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="card h-100 product-card shadow-sm border-0 overflow-hidden">
                  {/* Product Image with Overlay Actions */}
                  <div className="position-relative overflow-hidden">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{ 
                        height: "280px", 
                        objectFit: "cover",
                        transform: hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    
                    
                    {/* Remove Button */}
                    <button
                      className="btn btn-danger rounded-circle p-2 position-absolute"
                      style={{
                        top: "15px",
                        right: "15px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
                      }}
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    >
                      <FaTrash style={{ fontSize: "0.9rem" }} />
                    </button>
                    
                    {/* Discount Badge */}
                    {item.discount && (
                      <span className="position-absolute top-0 start-0 m-2 badge bg-success">
                        {item.discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold" style={{ color: "#2c3e50" }}>
                      {item.name}
                    </h5>
                    
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-primary fw-bold fs-5">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-muted text-decoration-line-through ms-2 fs-6">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {item.rating && (
                      <div className="d-flex align-items-center mb-3">
                        <div className="text-warning me-1">
                          {"★".repeat(Math.round(item.rating))}
                          {"☆".repeat(5 - Math.round(item.rating))}
                        </div>
                        <small className="text-muted">({item.reviewCount})</small>
                      </div>
                    )}
                    
                    <p className="card-text text-muted small flex-grow-1">
                      {item.description || "Premium product with excellent quality and durability."}
                    </p>

                    <div className="d-grid gap-2 mt-auto">
                      <button
                        className="btn btn-primary d-flex align-items-center justify-content-center py-2"
                        onClick={() => handleAddToCart(item)}
                      >
                        <FaShoppingCart className="me-2" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default WishlistPage;