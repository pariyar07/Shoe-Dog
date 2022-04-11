import React from 'react';
import { Link } from "react-router-dom";
import {useProducts} from 'contexts/product-context'

export function Navbar() {
    const {state: {cart, wishlist}} = useProducts()
    return (
        <>
            <nav className="navbar-content">
                    <Link to="/home"><img className="nav-title" src="assets/shoedog-logo.png" alt="logo" /></Link>
                <div className="nav-container-search">
                    <select>
                        <option value="">All Category</option>
                        <option value="">Sneakers</option>
                        <option value="">Formal Shoes</option>
                        <option value="">Slippers</option>
                        <option value="">Cleats</option>
                    </select>
                    <input type="search" placeholder="Search for an item..." className="search" />
                    <a href="."><i className="fa fa-search"></i></a>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to="/product-listing"><p>Store</p></Link>
                    </li>
                    <li>
                            <Link to="/wishlist"><p>Wishlist</p></Link>
                            <div className="badge num-notification">
                                <i className="fa fa-bell"></i>
                                <span className="badge-notification-count">{wishlist.length}</span>
                            </div>
                    </li>
                    <li>
                            <Link to="/cart"><p>Cart</p></Link>
                            <div className="badge num-cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="badge-cart-count">{cart.length}</span>
                            </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Account &nbsp;
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/signup">Sign Up</Link>
                                <Link to="/signin">Sign In</Link>
                                <Link to="/logout">Log Out</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}