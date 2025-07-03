import logo from './logo.svg';
import './App.css';
import Navbar from './component/Header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
