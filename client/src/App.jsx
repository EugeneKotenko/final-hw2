import React from "react";
import Favicon from './Favicon';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Components/Redux/store';

import ErrorBoundary from './Components/Pages/ErrorBoundary';
import Navbar from './Components/Common/Navbar/Navbar';
import Home from './Components/Pages/Home';
import SmoothieConstructor from './Components/Pages/SmoothieConstructor';
import SpecialOffer from './Components/Pages/SpecialOffer';
import About from './Components/Pages/About';
import LoginSignup from './Components/Pages/LoginSignup';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Common/Footer/Footer'

const App = () => {
    return (
        <>
            <ErrorBoundary>
                <Provider store={store}>
                    <HashRouter>
                        <Favicon />
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/constructor" element={<SmoothieConstructor/>}/>
                            <Route path="/special" element={<SpecialOffer/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/login" element={<LoginSignup/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                        </Routes>               
                    </HashRouter>
                    <Footer />
                </Provider>
            </ErrorBoundary> 
        </>
    );
}

export default App;
