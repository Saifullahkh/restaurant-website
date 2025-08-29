import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../../src/assets/footer-logo.png'

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-3" style={{ backgroundColor: "#1f2937" }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-md-4">
            <img src={logo} alt="FoodieHub Logo" style={{ height: '70px' }} />
            <p className="">
              Experience the best dining with our curated restaurants and
              exclusive offers. Taste the difference with every bite!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li>
                <a href="/offers" className="text-decoration-none text-light">
                  Offers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled ">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-warning" />
                123 Main Street, Peshawar, Pakistan
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-warning" /> +92 335 9199919
              </li>
              <li>
                <FaEnvelope className="me-2 text-warning" />{" "}
                atifullahkhan47@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#3b5998",
                  color: "#fff",
                }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#e4405f",
                  color: "#fff",
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/"
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#1da1f2",
                  color: "#fff",
                }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="text-secondary my-4" />

        {/* Copyright */}
        <div className="text-center ">
          <small>
            © {new Date().getFullYear()} FoodieHub. All rights reserved. 
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
