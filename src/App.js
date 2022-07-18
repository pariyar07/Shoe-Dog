import React from "react";
import "index.css";
import {  Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/index.jsx";
import { ProductListing } from "pages/ProductListing/index.jsx";
import { SignUp } from "pages/Sign-Up/index.jsx";
import { SignIn } from "pages/Sign-In/index.jsx";
import { Wishlist } from "pages/Wishlist/index.jsx";
import { Cart } from "pages/Cart/index.jsx";
import {RequiresAuth} from "services/requiresAuth.jsx";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-listing" element={<RequiresAuth><ProductListing /></RequiresAuth>} />
            <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
            <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}><h1 style={{ fontSize: "5rem" }}>Page Not Found!</h1></div>} />
          </Routes>
    </div>
  );
}

export default App;
