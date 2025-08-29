import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FiMessageCircle, FiUser, FiMail } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✅ Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "50vh",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-3 mb-3 animate__animated animate__fadeInDown">
            Get in Touch
          </h1>
          <p className="lead fs-4 mx-auto" style={{ maxWidth: "600px" }}>
            We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          {[
            {
              icon: <FaMapMarkerAlt size={30} />,
              title: "Our Location",
              content: "123 Main Street, Karachi, Pakistan",
              color: "primary",
              link: "#map",
            },
            {
              icon: <FaPhoneAlt size={30} />,
              title: "Phone Number",
              content: "+92 300 1234567",
              color: "success",
              link: "tel:+923001234567",
            },
            {
              icon: <FaEnvelope size={30} />,
              title: "Email Address",
              content: "info@restaurant.com",
              color: "danger",
              link: "mailto:info@restaurant.com",
            },
            {
              icon: <FaClock size={30} />,
              title: "Opening Hours",
              content: "Mon - Sun: 10:00 AM - 11:00 PM",
              color: "warning",
              link: null,
            },
          ].map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className={`card h-100 border-0 shadow-sm text-center hover-lift bg-${item.color} text-white`}
              >
                <div className="card-body p-4">
                  <div className="mb-3">{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="mb-0">{item.content}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="stretched-link text-white-50"
                    >
                      <small>
                        Click to{" "}
                        {item.title.includes("Email")
                          ? "email"
                          : item.title.includes("Phone")
                          ? "call"
                          : "view"}
                      </small>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="container py-5">
        <div className="row g-5 align-items-start">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="pe-lg-4">
              <h3 className="fw-bold display-6 mb-4">
                Let's Start a Conversation
              </h3>
              <p className="lead text-muted mb-4">
                Whether you have a question, feedback, or just want to say hello
                – we're always here to connect with you.
              </p>

              {/* Extra Info */}
              <div className="d-flex align-items-start mb-4">
                <div className="bg-light rounded-circle p-3 me-3 flex-shrink-0">
                  <FaHeadset size={24} className="text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Customer Support</h5>
                  <p className="text-muted mb-0">
                    Our team is here to help you 7 days a week
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-light rounded-circle p-3 me-3 flex-shrink-0">
                  <FiMessageCircle size={24} className="text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Quick Response</h5>
                  <p className="text-muted mb-0">
                    We typically reply within a few hours
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-light rounded-4 p-4 mt-4">
                <h6 className="fw-bold mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  {[
                    {
                      name: "Facebook",
                      icon: <FaFacebookF size={18} />,
                      color: "#3b5998",
                      href: "https://facebook.com",
                    },
                    {
                      name: "Instagram",
                      icon: <FaInstagram size={18} />,
                      color: "#e4405f",
                      href: "https://instagram.com",
                    },
                    {
                      name: "Twitter",
                      icon: <FaTwitter size={18} />,
                      color: "#1da1f2",
                      href: "https://twitter.com",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_self"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: social.color,
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card shadow border-0 overflow-hidden">
              <div className="card-body p-4 p-lg-5">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3">
                    <FaPaperPlane size={24} className="text-white" />
                  </div>
                  <h3 className="fw-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name" className="d-flex align-items-center">
                          <FiUser className="me-2" /> Your Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email" className="d-flex align-items-center">
                          <FiMail className="me-2" /> Email Address
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          style={{ height: "150px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold d-flex align-items-center mx-auto"
                        disabled={
                          !formData.name || !formData.email || !formData.message
                        }
                      >
                        <FaPaperPlane className="me-2" /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>
        {`
          .contact-page {
            scroll-behavior: smooth;
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
          }
          .form-floating label {
            color: #6c757d;
          }
          .form-control:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
          }
          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          a[title]:hover {
            opacity: 0.8;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
