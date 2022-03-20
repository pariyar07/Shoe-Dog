import React from 'react';
import "../../../index"

export function Footer() {
    return (
        <>
            <footer class="footer-wrapper">
                <div class="footer left-info">
                    <div>
                        <h1 class="footer-title">Shoe Dog</h1>
                        <p>Reinvent your life.</p>
                    </div>
                    <div class="footer-creator">
                        <li>Made by <span>Satyam Pariyar</span></li>
                        <li>© 2022, All Rights Reserved</li>
                    </div>
                    <div class="footer-icons">
                        <li><a href="https://github.com/pariyar07"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://twitter.com/satyamP_js"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://hashnode.com/@SatyamP"><i class="fa fa-rss"></i></a></li>
                    </div>
                </div>
                <div class="footer middle-left-info">
                    <h1>Categories</h1>
                    <li><a href=".">Sneaker</a></li>
                    <li><a href=".">Formal Shoes</a></li>
                    <li><a href=".">Trainers</a></li>
                    <li><a href=".">Cleats</a></li>
                </div>
                <div class="footer middle-right-info">
                    <h1>Account</h1>
                    <li><a href="./sign-up.html">My Account</a></li>
                    <li><a href=".">Wishlist</a></li>
                    <li><a href="./cart.html">View Cart</a></li>
                    <li><a href=".">Track Order</a></li>
                    <li><a href=".">Privacy Policy</a></li>
                </div>
                <div class="footer right-info">
                    <h1>Contact Us</h1>
                    <li>
                        <i class="fa fa-location"></i>
                        <p>Location: <span>India</span></p>
                    </li>
                    <li>
                        <i class="fa fa-location"></i>
                        <p>Call: <span>+91-0000000000</span></p>
                    </li>
                    <li>
                        <i class="fa fa-location"></i>
                        <p>E-mail: <span>mail@wshoedog.com</span></p>
                    </li>
                    <p class="tagline">Moving you More👟</p>
                </div>
            </footer>
        </>
    );
}
