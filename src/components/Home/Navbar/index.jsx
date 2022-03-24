import React from 'react';

export function Navbar() {
    return (
        <>
            <nav className="navbar-content">
                <a href=".">
                    <h1 className="nav-title">Shoe Dog👟</h1>
                </a>
                <div className="nav-container-search">
                    <select>
                        <option value="">All Category</option>
                        <option value="">Sneakers</option>
                        <option value="">Formal Shoes</option>
                        <option value="">Trainers</option>
                        <option value="">Cleats</option>
                    </select>
                    <input type="search" placeholder="Search for an item..." className="search" />
                    <a href="."><i className="fa fa-search"></i></a>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="."><p>Store</p></a>
                    </li>
                    <li>
                        <a href=".">
                            <p>Wishlist</p>
                            <div className="badge num-notification">
                                <i className="fa fa-bell"></i>
                                <span className="badge-notification-count">7</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=".">
                            <p>Cart</p>
                            <div className="badge num-cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="badge-cart-count">3</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Account &nbsp;
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href=".">Sign Up</a>
                                <a href=".">Sign In</a>
                                <a href=".">Log Out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}