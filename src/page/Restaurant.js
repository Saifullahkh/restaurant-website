import React, { useState, useMemo } from "react";
import RestaurantCard from "../component/RestaurantCard";
import { restaurant } from "../data/data";
import { FaSearch, FaFilter, FaUtensils, FaStar, FaFire, FaTimes, FaArrowUp } from "react-icons/fa";

const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("featured");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get all unique categories
  const categories = useMemo(() => {
    const allCategories = restaurant.map(res => res.category);
    return ["all", ...new Set(allCategories)];
  }, []);

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    let results = restaurant.filter(res => {
      const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           res.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || res.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort results
    switch(sortOption) {
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured (default order)
        break;
    }

    return results;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="restaurant-page">
      {/* Hero Section */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center text-center position-relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "60vh",
        }}
      >
        <div className="container position-relative z-1">
          <h1 className="fw-bold display-4 mb-4 animate__animated animate__fadeInDown">
            Culinary Excellence Awaits
          </h1>
          <p className="lead fs-5 mb-5 mx-auto" style={{maxWidth: "600px"}}>
            Discover premium dining experiences from the finest restaurants in town
          </p>
          
          {/* Search Bar */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="input-group input-group-lg shadow-lg rounded-pill overflow-hidden">
                <span className="input-group-text bg-white border-0 ps-4">
                  <FaSearch className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-0 px-2"
                  placeholder="Search restaurants or cuisines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="input-group-text bg-white border-0 pe-4"
                    onClick={() => setSearchQuery("")}
                  >
                    <FaTimes className="text-muted" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-light py-4 sticky-top shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <FaFilter className="text-primary me-2" />
                <h6 className="mb-0 me-3 fw-bold">Filter by:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`btn btn-sm rounded-pill px-3 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category === "all" ? "All" : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-md-end">
                <h6 className="mb-0 me-3 fw-bold">Sort by:</h6>
                <select
                  className="form-select form-select-sm w-auto rounded-pill"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A to Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="text-muted mb-0">
                Showing {filteredRestaurants.length} of {restaurant.length} restaurants
              </h6>
              {searchQuery && (
                <button
                  className="btn btn-sm btn-outline-secondary rounded-pill"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      {filteredRestaurants.filter(res => res.rating >= 4.5).length > 0 && (
        <section className="container py-4">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-danger p-2 rounded-circle me-3">
              <FaFire className="text-white" size={18} />
            </div>
            <h4 className="fw-bold mb-0">Highly Rated</h4>
          </div>
          <div className="row g-4">
            {filteredRestaurants
              .filter(res => res.rating >= 4.5)
              .map((res) => (
                <RestaurantCard restaurant={res} key={res.id} />
              ))}
          </div>
        </section>
      )}

     

      {/* Back to top button */}
      {showScrollTop && (
        <button 
          className="btn btn-primary rounded-circle p-3 position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center"
          onClick={scrollToTop}
          style={{zIndex: 1030, width: '50px', height: '50px'}}
        >
          <FaArrowUp />
        </button>
      )}

      {/* Custom Styles */}
      <style>
        {`
          .restaurant-page {
            scroll-behavior: smooth;
          }
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.3) 0%, rgba(142, 68, 173, 0.3) 100%);
          }
          .bg-gradient-primary {
            background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          }
          .sticky-top {
            z-index: 1020;
          }
          
          /* Scroll indicator animation */
          .scroll-indicator {
            width: 30px;
            height: 50px;
            position: relative;
          }
          .scroll-line {
            width: 2px;
            height: 30px;
            background: white;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
            animation: scrollAnimation 2s infinite;
          }
          @keyframes scrollAnimation {
            0% { opacity: 1; height: 15px; }
            100% { opacity: 0; height: 30px; transform: translateX(-50%) translateY(20px); }
          }
          
          /* Enhanced card hover effects */
          .restaurant-card {
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          .restaurant-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          
          /* Button animations */
          .btn {
            transition: all 0.2s ease;
          }
          .btn:hover {
            transform: translateY(-1px);
          }
        `}
      </style>
    </div>
  );
};

export default Restaurant;