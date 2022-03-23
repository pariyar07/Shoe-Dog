import React from 'react';
import { Navbar } from '../../components/Home/Navbar/index'
import { Footer } from '../../components/Home/Footer/index'
import { HorizontalCard } from '../../components/Home/common/horizontal-card'
import '../../index.css'

export function Cart() {
    return (
        <>
            <Navbar />
            <main className="cart-main-section">
                <section className="cart-left-section">
                    <div className="cart-header">
                        <h1>Cart</h1>
                        <h3>5 items in basket</h3>
                    </div>
                    <button className="remove-all">Remove All</button>
                    <div className="cart-card-container">
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                    </div>
                </section>
                <aside className="cart-navbar">
                    <div className="coupon">
                        <p><i className="fas fa-tag"></i> Apply Coupon</p>
                        <button>Apply</button>
                    </div>
                    <div className="price-details">
                        <h2>Price Details (5 Items)</h2>
                        <div className="price-details-categories">
                            <li>
                                <p>Price</p>
                                <span>$1000</span>
                            </li>
                            <li>
                                <p>Discount</p>
                                <span>$500</span>
                            </li>
                            <li>
                                <p>Discount %</p>
                                <span>50%</span>
                            </li>
                            <li>
                                <p>Coupon Discount</p>
                                <span>0</span>
                            </li>
                            <li>
                                <p>Delivery Charges</p>
                                <span>Free</span>
                            </li>
                        </div>
                    </div>
                    <div className="total-price">
                        <h3>Total</h3>
                        <h3>$500</h3>
                    </div>
                    <button className="buy-btn">Ready to Take Off</button>
                </aside>
            </main>
            <Footer />
        </>
    );
}