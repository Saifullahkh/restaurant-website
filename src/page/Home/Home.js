import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { FaStore, FaChartLine, FaDollarSign, FaLock } from 'react-icons/fa';
import Slider from "react-slick";
import img1 from '../../assets/carousel-1.jpg';
import img2 from '../../assets/carousel-2.jpg';
import img3 from '../../assets/carousel-3.jpg';
import './Home.css'; // 👈 Create and import a CSS file
import { stories, categories } from '../../data/data'; // Assuming you have a data.js file with the stories array
import RestaurantList from '../../component/RestaurantList';
import { restaurant } from '../../data/data'; // Assuming you have a data.js file with the restaurants array
import banner from '../../assets/banner.png'; // Assuming you have a banner image

function Home() {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  centerMode: true,
  centerPadding: "80px",  // creates half-visible effect
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        centerPadding: "50px",
      },
    },
  ],
};

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide custom-carousel position-relative">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>BBQ Extravaganza</h5>
              <p>Sizzling hot BBQ from Pakistan's finest</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Authentic Pakistani Flavors</h5>
              <p>Discover the rich taste of traditional dishes</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biryani Festival</h5>
              <p>Enjoy the king of rice dishes from top restaurants</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-btn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* search section */}
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <div className="search-location">
          <FiMapPin className="location-icon" />
          <span className='d-none d-md-inline'>Islamabad</span>
        </div>
      </div>

      {/* Featured Restaurants Section */}
      <section className="stories text-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 feature-story gradient-text">Featured Stories</h2>
          <Slider {...settings}>
            {stories.map((story, idx) => (
              <div key={idx} className="px-2">
                <div
                  className={`border-top border-bottom border-${story.color} bg-dark rounded`}
                  style={{ height: "220px" }}
                >
                  <div className="position-relative h-100">
                    <img
                      src={story.img}
                      alt={story.title}
                      className="img-fluid w-100 h-100 rounded"
                      style={{ objectFit: "cover", filter: "brightness(0.5)" }}
                    />
                    <div className="position-absolute bottom-0 w-100 px-2 pb-2">
                      <h6 className="text-white fw-bold mb-0">{story.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </section>

    {/* Explore Categories */}
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold gradient-text">Explore Categories</h4>
        <div className="">
          <button className="btn text-success fw-bold fs-5">
            See All →
          </button>
        </div>
      </div>
      
     <div className="row g-md-3 pb-2">
  {categories.map((category, index) => (
    <div 
      key={index} 
      className="col-6 col-md-3 col-lg-2 custom-col-lg-up text-center"
    >
      <img 
        src={category.image} 
        alt={category.name}
        className="img-fluid rounded mb-2"
        style={{ 
          height: "130px",
          objectFit: "cover",
          maxWidth: "130px",
          width: "100%"
        }}
      />
      <h6 className="fw-bold" style={{ fontSize: "0.85rem" }}>
        {category.name}
      </h6>
    </div>
  ))}
</div>

    </div>

    
    <RestaurantList
      data={restaurant}
      category="Pakistani"
      title="Popular  Restaurants"
    />

    {/* Discount Section */}
    <div className="container">
      <div className='row'>
        <div className='col-12'>      
          <img src={banner} alt="Discount Banner" className="img-fluid " />
        </div>
      </div>
    </div>
    
    {/* Vendor Section */}
    <div className=" text-white  container rounded-4">
      <div className="row align-items-center bg-success bg-gradient p-5 shadow-sm" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}>
        {/* Left Content */}
        <div className="col-lg-6">
          <span className="badge bg-light text-success fw-semibold mb-3 fs-6 rounded-pill">
            Join foodihub Today
          </span>
          <h1 className="fw-bold mb-3 ">Grow Your Business with foodieHub</h1>
          <p className="mb-4">
            Join thousands of successful vendors and reach millions of customers.
            Start selling your products online with just a few simple steps.
          </p>
          <div className="row text-white mb-4">
            <div className="col-6 mb-3 d-flex align-items-center">
              <FaStore className="me-2" />
              Create your store
            </div>
            <div className="col-6 mb-3 d-flex align-items-center">
              <FaChartLine className="me-2" />
              Track your sales
            </div>
            <div className="col-6 mb-3 d-flex align-items-center">
              <FaDollarSign className="me-2" />
              Boost your revenue
            </div>
            <div className="col-6 mb-3 d-flex align-items-center">
              <FaLock className="me-2" />
              Secure payments
            </div>
          </div>
          <button className="btn btn-light btn-sm  text-success fw-semibold  px-md-4 px-3 py-2 rounded-pill">
            Register as a Seller →
          </button>
        </div>

        {/* Right Image */}
       <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" // Replace with actual URL
            alt="Food business illustration"
            className="img-fluid rounded-4"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="row bg-white text-dark  p-4 d-flex justify-content-around flex-wrap shadow-sm " style={{ borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem" }}>
        <div className="col-md-3 col-6 text-center px-3 mb-md-0 mb-3">
          <h4 className="fw-bold">5000+</h4>
          <p className="mb-0">Active Vendors</p>
        </div>
        <div className="col-md-3 col-6 text-center px-3 mb-md-0 mb-3">
          <h4 className="fw-bold">1M+</h4>
          <p className="mb-0">Daily Orders</p>
        </div>
        <div className="col-md-3 col-6 text-center px-3 mb-md-0 mb-3">
          <h4 className="fw-bold">50+</h4>
          <p className="mb-0">Cities</p>
        </div>
        <div className="col-md-3 col-6 text-center px-3 mb-md-0 mb-3">
          <h4 className="fw-bold">4.8/5</h4>
          <p className="mb-0">Vendor Satisfaction</p>
        </div>
      </div>
    </div>
      
    {/* Pakistani Cuisine Section */}
     <RestaurantList
        data={restaurant}
        category="Pakistani"
        title="Pakistani Cuisine"
     />
    
    {/* BBQ Delights Section */}
      <RestaurantList
        data={restaurant}
        category="BBQ"
        title="BBQ Delights"
      />

    {/* Biryani Specials Section */}  
       <RestaurantList
        data={restaurant}
        category="Biryani"
        title="Biryani Specials"
      />

    {/* Fast Food Favorites Section */}
      <RestaurantList
        data={restaurant}
        category="Fast Food"
        title="Fast Food"
      />

    {/* Desi Food Section */}
       <RestaurantList
        data={restaurant}
        category="Desi"
        title="Desi Food"
      />

    {/* Chinese Cuisine Section */}
      <RestaurantList
        data={restaurant}
        category="Chinese"
        title="Chinese"
      />

    {/* Pizza Specials Section */}
      <RestaurantList
        data={restaurant}
        category="Pizza"
        title="Pizza"
      />
    </>
  );
}

export default Home;
