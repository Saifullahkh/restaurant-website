import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurant } from "../data/data";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { WishlistContext } from "./WishlistContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestaurantCard from '../component/RestaurantCard' // ✅ Reusable card

const RestaurantDetail = () => {
   const [reviews, setReviews] = useState([
    { name: "Ali Khan", rating: 4, comment: "Great food and friendly staff! Will visit again." },
    { name: "Sara Ahmed", rating: 5, comment: "Loved the ambience and the taste. Highly recommended!" },
  ]);

  const [newReview, setNewReview] = useState("");

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

  // ✅ Related products (same category except current)
  const relatedRestaurants = restaurant.filter(
    (r) => r.category === selectedRestaurant.category && r.id !== selectedRestaurant.id
  );


  //Reviews
  
  // ✅ Handle Submit Review
  const handleSubmit = () => {
    if (newReview.trim() === "") return;

    const review = {
      name: "Guest User", // default naam (ya tum input le sakte ho)
      rating: 5, // default ⭐ (ya dropdown bana sakte ho)
      comment: newReview,
    };

    setReviews([review, ...reviews]); // naya review top pe add hoga
    setNewReview(""); // textarea clear
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

      {/* ✅ Related Products */}
      {relatedRestaurants.length > 0 && (
        <div className="mt-5">
          <h3 className="fw-bold mb-4 border-start border-4 border-primary ps-3">
            Related Restaurants
          </h3>
          <div className="row g-4">
            {relatedRestaurants.slice(0, 4).map((res) => (
              <RestaurantCard key={res.id} restaurant={res}  />
            ))}
          </div>
        </div>
      )}

      {/* ✅ Reviews & Comments Section */}
      <div className="mt-5 row">
        <h3 className="fw-bold mb-4 border-start border-4 border-warning ps-3">
          Customer Reviews
        </h3>
        <div className="col-md-8">
      {/* Show Reviews */}
      {reviews.map((rev, index) => (
        <div key={index} className="mb-3 p-3 border rounded shadow-sm bg-light">
          <strong>{rev.name}</strong> {"⭐".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
          <p className="mb-0">{rev.comment}</p>
        </div>
      ))}

      {/* Add Comment Form */}
      <div className="mt-4">
        <h5 className="fw-bold">Leave a Comment</h5>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Review
        </button>
      </div>
    </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default RestaurantDetail;
