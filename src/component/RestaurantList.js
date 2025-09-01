import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = ({ data = [], category, title }) => {
  const filtered = data.filter(
    (r) => r.category.toLowerCase() === category.toLowerCase()
  );

  if (!filtered.length) return null;

  return (
    <section className="container mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">{title}</h4>
        <a href='/restaurants' className="text-success fw-bold text-decoration-none fs-5">
          See All →
        </a>
      </div>
      <div className="row">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </section>
  );
};


export default RestaurantList