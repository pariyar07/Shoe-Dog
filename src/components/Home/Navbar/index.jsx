import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "contexts/product-context";
import { useAuth } from "contexts/authContext";

export function Navbar() {
  const {
    state: { cart, wishlist },
    filterDispatch,
  } = useProducts();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <>
      <nav className="navbar-content">
        <Link to="/">
          <img className="nav-title" src="assets/shoedog-logo.png" alt="logo" />
        </Link>
        <div className="nav-container-search">
          <select>
            <option>All Category</option>
            <option>Sneakers</option>
            <option>Formal Shoes</option>
            <option>Slippers</option>
            <option>Cleats</option>
          </select>
          <input
            type="search"
            placeholder="Search for an item..."
            className="search"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value.toLowerCase(),
              });
            }}
          />
          <a href=".">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/product-listing">
              <p>Store</p>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <p>Wishlist</p>
              <div className="badge num-notification">
                <i className="fa fa-bell"></i>
                <span className="badge-notification-count">
                  {wishlist.length}
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <p>Cart</p>
              <div className="badge num-cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge-cart-count">{cart.length}</span>
              </div>
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Account &nbsp;
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                {isLoggedIn ? (
                  <button
                    className="logout-btn"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                  </>
                )}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
