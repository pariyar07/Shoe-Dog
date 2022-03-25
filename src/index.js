import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "pages/Home/index.jsx"
import {ProductListing} from "pages/ProductListing/index.jsx"
import { SignUp } from 'pages/Sign-Up/index.jsx';
import { SignIn } from 'pages/Sign-In/index.jsx';
import { Logout } from 'pages/Logout/index.jsx';
import { Wishlist } from 'pages/Wishlist/index.jsx';
import { Cart } from 'pages/Cart/index.jsx';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
