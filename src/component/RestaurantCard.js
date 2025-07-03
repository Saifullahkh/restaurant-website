import React from 'react'
import { restaurant } from '../data/data';
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const RestaurantCard = ({ restaurant }) => (
  <div className="col-md-3 ">
    <div className="card shadow-sm border-0 h-100">
      <div className="position-relative">
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        {restaurant.isOpen && (
          <span className="badge bg-success position-absolute top-0 start-0 m-2">
            Open
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
  </div>
);

export default RestaurantCard