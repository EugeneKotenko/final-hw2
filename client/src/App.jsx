import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/styles/index.scss";
import HomePage from "./components/HomePage";
import SmoozieConstructor from "./components/SmoozieConstructor";
import AboutUsPage from "./components/AboutUsPage";
import Cart from "./components/Cart";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Checkout from "./components/CheckoutForm";
import ContactUs from "./components/ContactUs";
import OrderNow from "./components/OrderNow";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/constructor" element={<SmoozieConstructor />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/order" element={<OrderNow />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
