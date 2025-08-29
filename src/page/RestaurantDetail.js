import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurant } from "../data/data";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { WishlistContext } from "./WishlistContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const selectedRestaurant = restaurant.find((r) => r.id.toString() === id);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlist } =
    useContext(WishlistContext);

  const [added, setAdded] = useState(false);

  if (!selectedRestaurant) {
    return (
      <h2 className="text-center mt-5 fw-bold text-danger">
        Restaurant not found
      </h2>
    );
  }

  const isInWishlist = wishlist.some(
    (item) => item.id === selectedRestaurant.id
  );

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(selectedRestaurant);
    setAdded(true);

    // Toast notification
    toast.success(`${selectedRestaurant.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      theme: "colored",
    });

    // Reset button after 2 sec
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container my-5">
      <div className="row g-5 align-items-center">
        {/* Left Side */}
        <div className="col-md-6 position-relative">
          <img
            src={selectedRestaurant.image}
            alt={selectedRestaurant.name}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
          <button
            className="btn btn-light rounded-circle position-absolute  m-3 shadow"
            style={{ top: "0px", right: "20px" }}
            onClick={() =>
              isInWishlist
                ? removeFromWishlist(selectedRestaurant.id)
                : addToWishlist(selectedRestaurant)
            }
          >
            <FaHeart
              className={`fs-5 ${isInWishlist ? "text-danger" : "text-muted"}`}
            />
          </button>
        </div>

        {/* Right Side */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">{selectedRestaurant.name}</h2>
          <p className="text-muted">{selectedRestaurant.address}</p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge bg-success p-2 d-flex align-items-center">
              <FaStar className="me-1" />
              {selectedRestaurant.rating}
            </span>
            <small className="text-muted">
              ({selectedRestaurant.reviews} reviews)
            </small>
          </div>

          <p className="mb-2">
            <strong>Status:</strong>{" "}
            {selectedRestaurant.isOpen ? (
              <span className="text-success fw-semibold">Open</span>
            ) : (
              <span className="text-danger fw-semibold">Closed</span>
            )}
          </p>

          <p className="text-secondary lh-lg">
            Our restaurant offers freshly prepared dishes made with quality
            ingredients, blending traditional flavors with modern taste. Enjoy a
            cozy atmosphere, friendly service, and unforgettable dining
            experience with family and friends.
          </p>

          <h4 className="text-primary fw-bold mb-4">
            Price: ${selectedRestaurant.price}
          </h4>

          {/* Add to Cart Button */}
          <button
            className={`btn ${added ? "btn-success" : "btn-primary"} px-4 py-2 shadow`}
            onClick={handleAddToCart}
            disabled={added}
          >
            <FaShoppingCart className="me-2" />
            {added ? "Added ✅" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default RestaurantDetail;
