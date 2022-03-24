import React from 'react';
import 'index.css'

export function Footer() {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="footer left-info">
                    <div>
                        <h1 className="footer-title">Shoe Dog</h1>
                        <p>Reinvent your life.</p>
                    </div>
                    <div className="footer-creator">
                        <li>Made by <span>Satyam Pariyar</span></li>
                        <li>© 2022, All Rights Reserved</li>
                    </div>
                    <div className="footer-icons">
                        <li><a href="https://github.com/pariyar07"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://twitter.com/satyamP_js"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://hashnode.com/@SatyamP"><i className="fa fa-rss"></i></a></li>
                    </div>
                </div>
                <div className="footer middle-left-info">
                    <h1>Categories</h1>
                    <li><a href=".">Sneaker</a></li>
                    <li><a href=".">Formal Shoes</a></li>
                    <li><a href=".">Trainers</a></li>
                    <li><a href=".">Cleats</a></li>
                </div>
                <div className="footer middle-right-info">
                    <h1>Account</h1>
                    <li><a href="./sign-up.html">My Account</a></li>
                    <li><a href=".">Wishlist</a></li>
                    <li><a href="./cart.html">View Cart</a></li>
                    <li><a href=".">Track Order</a></li>
                    <li><a href=".">Privacy Policy</a></li>
                </div>
                <div className="footer right-info">
                    <h1>Contact Us</h1>
                    <li>
                        <i className="fa fa-location"></i>
                        <p>Location: <span>India</span></p>
                    </li>
                    <li>
                        <i className="fa fa-location"></i>
                        <p>Call: <span>+91-0000000000</span></p>
                    </li>
                    <li>
                        <i className="fa fa-location"></i>
                        <p>E-mail: <span>mail@shoedog.com</span></p>
                    </li>
                    <p className="tagline">Moving you More👟</p>
                </div>
            </footer>
        </>
    );
}
