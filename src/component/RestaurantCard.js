import React, {useState} from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="col-lg-3 col-md-4">
      <Link
        to={`/restaurant/${restaurant.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card shadow-sm border-0 h-100" >
          <div className="position-relative" style={{ overflow: 'hidden' }}
            >
            <img
              src={restaurant.image}
              className="card-img-top"
              alt={restaurant.name}
              style={{ height: "200px", objectFit: "cover",cursor: "pointer",transform: hover ? "scale(1.1)" : "scale(1)",transition: "transform 0.3s ease",}}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
           {/* ✅ Open / Close Badge */}
            {restaurant.isOpen ? (
              <span className="badge bg-success position-absolute top-0 start-0 m-2">
                Open
              </span>
            ) : (
              <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                Closed
              </span>
            )}

          </div>
          <div className="card-body pb-4">
            <h5 className="card-title fw-bold">{restaurant.name}</h5>
            <p className="card-text text-muted mb-2">
              <FaMapMarkerAlt className="me-1 text-danger" />
              {restaurant.address}
            </p>
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-success">
                <FaStar className="me-1" />
                {restaurant.rating}
              </span>
              <small className="text-muted">({restaurant.reviews} reviews)</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
