import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import OrderedList from './components/OrderedList';

const App = () => {
  return (
    <Router>
      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<RestaurantDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/orderdlist" element={<OrderedList />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;