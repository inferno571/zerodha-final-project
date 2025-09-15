import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landingpage/Home/HomePage';
import Signup from './landingpage/Signup/Signup';
import AboutPage from "./landingpage/About/AboutPage";
import ProductPage from "./landingpage/Products/ProductsPage";
import SupportPage from "./landingpage/Support/SupportPage";
import Navbar from './landingpage/Navbar';
import NotFound from './landingpage/NotFound';
import PricingPage from './landingpage/Pricing/PricingPage'; // Or the correct path
import Footer from './landingpage/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/singup" element={<Signup/>}></Route>
     <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
       <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);



