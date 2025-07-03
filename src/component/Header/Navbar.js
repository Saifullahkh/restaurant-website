import React from 'react';
import logo from '../../assets/logoemart.png';
import menu from '../../assets/vector.svg';
import search from '../../assets/vector16.svg';
import offer from '../../assets/vector2.svg';
import wesh from '../../assets/vector15.svg';
import cart from '../../assets/vector18.svg';
import log from '../../assets/vector11.svg';

import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaHeart,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignInAlt,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
        <div className="container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand fw-bold fs-3 text-primary">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
          </Link>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-4">
              <li className="nav-item">
                <Link to="/resturant" className="nav-link fw-medium d-flex align-items-center gap-1">
                  <img src={search} alt="Search" style={{ height: '18px' }} /> Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link fw-medium d-flex align-items-center gap-1">
                  <img src={offer} alt="Offers" style={{ height: '18px' }} /> Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link fw-medium d-flex align-items-center gap-1">
                  <img src={wesh} alt="Wishlist" style={{ height: '18px' }} /> Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link fw-medium d-flex align-items-center gap-1">
                  <img src={cart} alt="Cart" style={{ height: '18px' }} /> Cart
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-success rounded-0 d-flex align-items-center gap-1" type="button">
                  <img src={log} alt="login" style={{ height: '18px' }} /> Login
                </button>
              </li>

              {/* Offcanvas Toggle Button */}
              <li className="nav-item">
                <a
                  className="btn"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <img src={menu} alt="Menu" style={{ height: '22px' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr className="mx-3" />
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav px-3 py-2">
            <li className="nav-item py-1">
              <Link to="/" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/resturant" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaUtensils /> Restaurant
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/cart" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaShoppingCart /> Cart
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/wishlist" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaHeart /> Wishlist
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/about" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaInfoCircle /> About Us
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/contact" className="nav-link d-flex align-items-center gap-2 fs-6">
                <FaPhoneAlt /> Contact Us
              </Link>
            </li>
            <hr className="my-2 mx-3" />
            <li className="nav-item py-1">
              <Link to="/login" className="nav-link d-flex align-items-center gap-2 fs-6 text-success fw-semibold">
                <FaSignInAlt /> Login / Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
