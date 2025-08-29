import React, { useState, useEffect } from "react";
import {
  FaUtensils,
  FaLeaf,
  FaSmile,
  FaStar,
  FaQuoteLeft,
  FaAward,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import { FiCoffee, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      text: "Amazing food and great service! The ambiance is perfect for family dinners. Highly recommend their signature dishes.",
      author: "Sarah Khan",
      role: "Food Blogger",
      rating: 5,
    },
    {
      text: "The best restaurant in town. Cozy atmosphere with absolutely delicious food! Their biryani is to die for.",
      author: "Ali Raza",
      role: "Regular Customer",
      rating: 5,
    },
    {
      text: "I love their barbecue platters, absolutely mouth-watering. Great quality ingredients and friendly staff.",
      author: "Ayesha Ahmed",
      role: "Food Enthusiast",
      rating: 4.5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-warning" : "text-muted"}
        size={16}
      />
    ));
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "70vh",
          padding: "20px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4 display-md-3 mb-3 animate__animated animate__fadeInDown">
            Our Story
          </h1>
          <p className="lead fs-5 fs-md-4 mb-4 animate__animated animate__fadeInUp">
            Where Tradition Meets Innovation
          </p>

          {/* Stats */}
          <div className="row g-3 justify-content-center mt-4">
            <div className="col-4 col-md-4 col-lg-3">
              <div className="stat-box text-white text-center">
                <FiCoffee size={28} className="mb-2" />
                <h3 className="fw-bold mb-0">5000+</h3>
                <small>Happy Customers</small>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-3">
              <div className="stat-box text-white text-center">
                <FaAward size={28} className="mb-2" />
                <h3 className="fw-bold mb-0">15+</h3>
                <small>Years Experience</small>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-3">
              <div className="stat-box text-white text-center">
                <FaUtensils size={28} className="mb-2" />
                <h3 className="fw-bold mb-0">200+</h3>
                <small>Dishes Served</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5 my-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1470&q=80"
                alt="restaurant interior"
                className="img-fluid rounded shadow-lg main-image"
              />
              <div className="position-absolute bottom-0 start-0 bg-primary text-white p-2 p-md-3 rounded-end shadow">
                <h5 className="mb-0">Since 2008</h5>
                <small>Serving with love</small>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 display-6">
              Crafting Memories Through Food
            </h2>
            <p className="lead text-muted mb-4">
              For over a decade, we've been more than just a restaurant - we've
              been a place where memories are made, traditions are honored, and
              innovation is celebrated.
            </p>

            <div className="d-flex gap-3 mb-3">
              <div className="bg-light rounded-circle p-3">
                <FaHeart size={22} className="text-danger" />
              </div>
              <div>
                <h5 className="fw-bold">Passion-Driven Cuisine</h5>
                <p className="text-muted mb-0">
                  Every dish tells a story of dedication and love for authentic
                  flavors.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="bg-light rounded-circle p-3">
                <FiTrendingUp size={22} className="text-primary" />
              </div>
              <div>
                <h5 className="fw-bold">Continuous Innovation</h5>
                <p className="text-muted mb-0">
                  Blending traditional recipes with modern culinary techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">Why Choose Us</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Excellence is not just a standard - it's our promise to you
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaUtensils size={35} />,
                title: "Culinary Excellence",
                desc: "Master chefs crafting perfection in every dish",
                color: "primary",
              },
              {
                icon: <FaLeaf size={35} />,
                title: "Farm Fresh Ingredients",
                desc: "Locally sourced, organic produce daily",
                color: "success",
              },
              {
                icon: <FaSmile size={35} />,
                title: "Warm Atmosphere",
                desc: "A welcoming space for all your special moments",
                color: "warning",
              },
              {
                icon: <FaStar size={35} />,
                title: "Award-Winning Service",
                desc: "Recognized for exceptional hospitality",
                color: "danger",
              },
              {
                icon: <FaUsers size={35} />,
                title: "Family Friendly",
                desc: "Perfect environment for all ages",
                color: "info",
              },
              {
                icon: <FaAward size={35} />,
                title: "Quality Guaranteed",
                desc: "Consistent excellence in every visit",
                color: "secondary",
              },
            ].map((item, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-lift text-center p-4">
                  <div className={`text-${item.color} mb-3`}>{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">Voices of Satisfaction</h2>
            <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
              Discover why our guests keep coming back for more
            </p>
          </div>

          <div className="col-lg-8 mx-auto">
            <div className="testimonial-card bg-primary p-4 p-md-5 rounded-4 text-center">
              <FaQuoteLeft size={35} className="text-white-50 mb-3" />
              <p className="lead fst-italic fs-5 mb-4">
                "{reviews[activeReview].text}"
              </p>
              <h6 className="fw-bold mb-1">{reviews[activeReview].author}</h6>
              <small className="text-white-50 d-block mb-3">
                {reviews[activeReview].role}
              </small>
              <div className="d-flex justify-content-center gap-1 mb-3">
                {renderStars(reviews[activeReview].rating)}
              </div>

              {/* Review Dots */}
              <div className="d-flex justify-content-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm rounded-circle ${
                      activeReview === index
                        ? "btn-light"
                        : "btn-outline-light"
                    }`}
                    onClick={() => setActiveReview(index)}
                    style={{ width: "12px", height: "12px", padding: 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Styles */}
      <style>
        {`
          .stat-box {
            padding: 15px;
            background: rgba(255,255,255,0.15);
            border-radius: 12px;
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .main-image {
            transition: transform 0.3s ease;
            width: 100%;
            height: auto;
          }
          .main-image:hover {
            transform: scale(1.02);
          }
          @media (max-width: 768px) {
            .display-4 {
              font-size: 2rem !important;
            }
            .display-5 {
              font-size: 1.75rem !important;
            }
            .testimonial-card {
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
