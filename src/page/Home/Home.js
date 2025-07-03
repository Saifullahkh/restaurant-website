import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import Slider from "react-slick";
import img1 from '../../assets/carousel-1.jpg'
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
          <span>Islamabad</span>
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
    <div className="container mt-5 px-0">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold gradient-text">Explore Categories</h2>
        <div className="">
          <button className="btn text-success fw-bold fs-5">
            See All →
          </button>
        </div>
      </div>
      
      <div className="d-flex flex-nowrap  pb-2" >
        {categories.map((category, index) => (
          <div key={index} className="flex-shrink-0 text-center" style={{ width: "12.5%" }}>
            <img 
              src={category.image} 
              alt={category.name}
              className="img-fluid rounded mb-2"
              style={{ 
                height: "130px",
                width: "100%",
                objectFit: "cover",
                maxWidth: "130px"
              }}
            />
            <h6 className="fw-bold" style={{ fontSize: "0.85rem" }}>{category.name}</h6>
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
    

    </>
  );
}

export default Home;
