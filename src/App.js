
import './App.css';
import Navbar from './component/Header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import RestaurantCard from './component/RestaurantCard';
import { restaurant } from "./data/data";
import RestaurantDetail from './page/RestaurantDetail';
import CartPage from './page/CartPage';
import { CartProvider } from './page/CartContext';
import CheckoutPage from './page/CheckoutPage';
import WishlistPage from './page/WishlistPage';
import { WishlistProvider } from './page/WishlistContext';
import Offers from './page/Offer';
import About from './page/About';
import Contact from './page/Contact';
import Footer from './component/Footer';
import Restaurant from './page/Restaurant';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path="/"
              element={
                <div className="row">
                  {restaurant.map((item) => (
                    <RestaurantCard key={item.id} restaurant={item} />
                  ))}
                </div>
              }
            />
            {/* Detail page */}
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
