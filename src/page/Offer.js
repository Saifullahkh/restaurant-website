import React, { useState } from "react";
import { restaurant } from "../data/data";
import { FaTag, FaStar, FaFire, FaClock, FaPercent, FaShoppingBag, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Offers = () => {
  // Filter restaurants which have offers
  const offerRestaurants = restaurant.filter((r) => r.offers);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter offers by type
  const filteredOffers = activeFilter === "all" 
    ? offerRestaurants 
    : offerRestaurants.filter(rest => rest.offers.type === activeFilter);

  // Get offer count by type
  const getOfferCount = (type) => {
    return type === "all" 
      ? offerRestaurants.length 
      : offerRestaurants.filter(r => r.offers.type === type).length;
  };

  return (
    <div className="offers-page" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div className="offers-hero py-5 text-center" style={{ 
        background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
        color: "white"
      }}>
        <div className="container">
          <div className="d-flex justify-content-center mb-3">
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem"
            }}>
              <FaFire />
            </div>
          </div>
          <h1 className="fw-bold display-4 mb-3">Special Offers</h1>
          <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
            Exclusive deals and discounts from your favorite restaurants. Limited time offers!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button 
                className={`btn ${activeFilter === "all" ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4 position-relative`}
                onClick={() => setActiveFilter("all")}
              >
                All Offers
              </button>
              <button 
                className={`btn ${activeFilter === "discount" ? "btn-danger" : "btn-outline-danger"} rounded-pill px-4 position-relative`}
                onClick={() => setActiveFilter("discount")}
              >
                <FaPercent className="me-1" /> Discounts
              </button>
              <button 
                className={`btn ${activeFilter === "free" ? "btn-success" : "btn-outline-success"} rounded-pill px-4 position-relative`}
                onClick={() => setActiveFilter("free")}
              >
                <FaShoppingBag className="me-1" /> Free Items 
              </button>
              <button 
                className={`btn ${activeFilter === "combo" ? "btn-warning" : "btn-outline-warning"} rounded-pill px-4 position-relative`}
                onClick={() => setActiveFilter("combo")}
              >
                <FaTag className="me-1" /> Combos
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="row mb-4">
          <div className="col-12">
            <h5 className="text-muted">
              {filteredOffers.length} {filteredOffers.length === 1 ? 'Offer' : 'Offers'} Available
            </h5>
          </div>
        </div>

        {/* Cards Grid */}
        {filteredOffers.length > 0 ? (
          <div className="row g-4">
            {filteredOffers.map((res) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={res.id}>
                <div className="card offer-card h-100 border-0 shadow-sm overflow-hidden">
                  {/* Offer Ribbon - Color based on offer type */}
                  <div className="offer-ribbon position-absolute start-0 top-3 px-3 py-2 text-white fw-bold" 
                    style={{ 
                      backgroundColor: "#27ae60",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                      zIndex: 1
                    }}>
                    <FaTag className="me-1" />
                    {res.offers.label}
                  </div>

                  {/* Restaurant Status */}
                  <div className="position-absolute end-0 top-3 m-2">
                    <span className={`badge px-2 py-2 ${res.isOpen ? "bg-success" : "bg-danger"}`}>
                      {res.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="position-relative overflow-hidden">
                    <img
                      src={res.image}
                      alt={res.name}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        transition: "transform 0.5s ease"
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark mb-2">{res.name}</h5>
                    <div className="d-flex align-items-center mb-2">
                      <FaUtensils className="text-muted me-2" />
                      <span className="text-muted">{res.category}</span>
                    </div>
                    <p className="text-muted small mb-3">{res.address}</p>

                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-warning text-dark me-2 d-flex align-items-center">
                        <FaStar className="me-1" />
                        {res.rating}
                      </span>
                      <small className="text-muted">({res.reviews} reviews)</small>
                    </div>

                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fw-bold text-primary fs-5">${res.price.toFixed(2)}</span>
                        
                        {/* Show discount percentage for discount offers */}
                        {res.offers.type === "discount" && (
                          <span className="badge bg-light text-success border border-success">
                            -{res.offers.value}%
                          </span>
                        )}
                      </div>

                      <Link 
                        to={`/restaurant/${res.id}`} 
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: "#27ae60",
                          border: "none"
                        }}
                      >
                        <FaShoppingBag className="me-2" /> Claim Offer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-5">
            <div className="py-4">
              <FaTag style={{ fontSize: "4rem", color: "#dee2e6" }} />
            </div>
            <h4 className="text-muted">No offers found</h4>
            <p className="text-muted mb-4">Try selecting a different filter or check back later for new offers.</p>
            <button 
              className="btn btn-primary rounded-pill px-4"
              onClick={() => setActiveFilter("all")}
            >
              Show All Offers
            </button>
          </div>
        )}
      </div>

       
    

      {/* Add some custom CSS for hover effects */}
      <style>
        {`
          .offer-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 16px;
          }
          
          .offer-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
          }
          
          .offer-card:hover .image-overlay {
            opacity: 1 !important;
          }
          
          .offer-card:hover .card-img-top {
            transform: scale(1.05);
          }
          
          .bg-gradient-primary {
            background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          }
          
          .btn-outline-primary, .btn-primary {
            min-width: 120px;
          }
          
          .btn-outline-danger, .btn-danger {
            min-width: 120px;
          }
          
          .btn-outline-success, .btn-success {
            min-width: 120px;
          }
          
          .btn-outline-warning, .btn-warning {
            min-width: 120px;
          }
        `}
      </style>
    </div>
  );
};

export default Offers;