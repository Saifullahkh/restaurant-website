import React, {  useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaHeart,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignInAlt,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaApple
} from 'react-icons/fa';
import { CartContext } from '../../page/CartContext';
import { WishlistContext } from '../../page/WishlistContext';
import logo from '../../assets/rest-logo.png';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemsCount = wishlist.length;

  // ✅ Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const userData = { email };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setShowLogin(false);
  };

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-1 sticky-top">
        <div className="container ">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand fw-bold">
            <img src={logo} alt="E-Mart Logo" style={{ height: '60px' }} />
          </Link>

          {/* Navbar Items */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center d-flex flex-row">
             
              <li className="nav-item position-relative mx-2 d-none d-md-inline">
                <Link to="/offers" className="nav-link fw-medium d-flex align-items-center">
                  <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: '#fff4e6', color: '#ff9f43', width: '40px', height: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                  </div>
                  <span className="d-none d-lg-inline ms-1" style={{ color: '#2c3e50' }}>Offers</span>
                </Link>
              </li>

              <li className="nav-item position-relative mx-2 d-none d-md-inline">
                <Link to="/wishlist" className="nav-link fw-medium d-flex align-items-center">
                  <div className="rounded-circle p-2 d-flex align-items-center justify-content-center position-relative" 
                    style={{ backgroundColor: '#ffebee', color: '#e74c3c', width: '40px', height: '40px' }}>
                    <FaHeart />
                    {wishlistItemsCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                        style={{ fontSize: '0.6rem' }}>
                        {wishlistItemsCount}
                      </span>
                    )}
                  </div>
                  <span className="d-none d-lg-inline ms-1" style={{ color: '#2c3e50' }}>Wishlist</span>
                </Link>
              </li>

              <li className="nav-item position-relative mx-2 d-none d-md-inline">
                <Link to="/cart" className="nav-link fw-medium d-flex align-items-center">
                  <div className="rounded-circle p-2 d-flex align-items-center justify-content-center position-relative" 
                    style={{ backgroundColor: '#e3f2fd', color: '#3498db', width: '40px', height: '40px' }}>
                    <FaShoppingCart />
                    {cartItemsCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" 
                        style={{ fontSize: '0.6rem' }}>
                        {cartItemsCount}
                      </span>
                    )}
                  </div>
                  <span className="d-none d-lg-inline ms-1" style={{ color: '#2c3e50' }}>Cart</span>
                </Link>
              </li>

               <li className="nav-item mx-2 d-none d-md-inline">
                  {user ? (
                    // ✅ Avatar instead of Login button
                    <div className="dropdown">
                      <button
                        className="btn btn-light rounded-circle border d-flex align-items-center justify-content-center"
                        type="button"
                        id="avatarMenu"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaUser />
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end shadow mt-2"
                        aria-labelledby="avatarMenu"
                        style={{ maxWidth: "250px" }}
                      >
                        <li>
                          <a className="dropdown-item" href="#profile">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#privacy">
                            Privacy
                          </a>
                        </li>
                        <li>
                          <hr  />
                        </li>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    // ✅ Login button
                    <button
                      className="btn btn-success rounded-pill d-flex align-items-center px-3"
                      type="button"
                      onClick={() => setShowLogin(true)}
                    >
                      <FaUser className="me-1" />
                      <span className="d-none d-md-inline">Login</span>
                    </button>
                  )}
                </li>


              {/* Offcanvas Toggle Button */}
              <li className="nav-item ms-2">
                <button
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', backgroundColor: '#f8f9fa' }}
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
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
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold d-flex align-items-center" id="offcanvasExampleLabel">
            <img src={logo} alt="E-Mart Logo" style={{ height: '40px' }} className="me-2" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3" 
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#e8f5e9', transition: 'all 0.3s ease' }}>
                  <FaHome style={{ color: '#4caf50' }} />
                </div>
                <div className="fw-semibold">Home</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/restaurants" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3"
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#fff3e0', transition: 'all 0.3s ease' }}>
                  <FaUtensils style={{ color: '#ff9800' }} />
                </div>
                <div className="fw-semibold">Restaurant</div>
              </Link>
            </li>

             <li className="nav-item position-relative  d-md-none d-inline">
                <Link to="/offers" className="nav-link fw-medium d-flex align-items-center gap-3 px-4 py-3">
                  <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: '#fff4e6', color: '#ff9f43', width: '40px', height: '40px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    </svg>
                  </div>
                  <span className="ms-1" >Offers</span>
                </Link>
              </li>
            
            <li className="nav-item">
              <Link 
                to="/cart" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3"
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center position-relative" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#e3f2fd', transition: 'all 0.3s ease' }}>
                  <FaShoppingCart style={{ color: '#2196f3' }} />
                  {cartItemsCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" 
                      style={{ fontSize: '0.55rem' }}>
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <div className="fw-semibold">Cart</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/wishlist" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3"
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center position-relative" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#ffebee', transition: 'all 0.3s ease' }}>
                  <FaHeart style={{ color: '#e74c3c' }} />
                  {wishlistItemsCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                      style={{ fontSize: '0.55rem' }}>
                      {wishlistItemsCount}
                    </span>
                  )}
                </div>
                <div className="fw-semibold">Wishlist</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/about" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3"
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#e8eaf6', transition: 'all 0.3s ease' }}>
                  <FaInfoCircle style={{ color: '#3f51b5' }} />
                </div>
                <div className="fw-semibold">About Us</div>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className="nav-link d-flex align-items-center gap-3 px-4 py-3"
                onClick={() => document.getElementById('offcanvasCloseBtn').click()}
              >
                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '40px', height: '40px', backgroundColor: '#e0f2f1', transition: 'all 0.3s ease' }}>
                  <FaPhoneAlt style={{ color: '#009688' }} />
                </div>
                <div className="fw-semibold">Contact Us</div>
              </Link>
            </li>
          </ul>
          
          <div className="border-top mx-4 my-3"></div>
          
          <div className="px-4">
            <Link 
              to="/login" 
              className="btn btn-success w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-2"
              onClick={() => document.getElementById('offcanvasCloseBtn').click()}
            >
              <FaSignInAlt /> Login / Register
            </Link>
          </div>
          
          {/* Hidden close button to programmatically close the offcanvas */}
          <button 
            id="offcanvasCloseBtn" 
            type="button" 
            className="d-none" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
      </div>

       {/* ✅ Custom Login Modal (same as before) */}
      {showLogin && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px", width: "100%" }}>
            <div className="modal-content rounded-4 shadow-lg border-0 overflow-hidden">
              {/* Close Button */}
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                onClick={() => setShowLogin(false)}
              ></button>

              {/* Header */}
              <div
                className="text-center p-4"
                style={{
                  background: "linear-gradient(to bottom, #e8f6ff, #ffffff)",
                }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <FaLock size={24} />
                </div>
                <h5 className="fw-bold">Sign in with email</h5>
                <p className="text-muted small mb-0">
                  Make a new doc to bring your words, data, and teams together. For free
                </p>
              </div>

              {/* Form */}
              <div className="modal-body px-4 pb-4">
                <form onSubmit={handleLogin}>
                  {/* Email */}
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-0">
                        <FaLock />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control border-0 bg-light"
                        placeholder="Password"
                        name="password"
                        required
                      />
                      <button
                        className="btn btn-light border-0"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    <div className="text-end mt-1">
                      <a href="#forgot" className="small text-decoration-none">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  {/* Submit */}
                  <button className="btn btn-dark w-100 rounded-pill fw-bold py-2">
                    Login
                  </button>
                </form>

                {/* Divider */}
                <div className="text-center my-3 position-relative">
                  <hr />
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 small text-muted">
                    Or sign in with
                  </span>
                </div>

                {/* Social Logins */}
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-light border rounded-circle  shadow-sm d-flex justify-content-center align-items-center" style={{width: '40px', height: '40px'}}>
                    <FaGoogle size={25} color="#EA4335" />
                  </button>
                  <button className="btn btn-light border rounded-circle  shadow-sm d-flex justify-content-center align-items-center " style={{width: '40px', height: '40px'}}>
                    <FaFacebook size={25} color="#1877F2" />
                  </button>
                  <button className="btn btn-light border rounded-circle  shadow-sm d-flex justify-content-center align-items-center" style={{width: '40px', height: '40px'}}>
                    <FaApple size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;