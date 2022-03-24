import React from 'react';
import { Navbar, Footer, HorizontalCard, CartNavbar } from 'fileModules';

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
                <CartNavbar/>
            </main>
            <Footer />
        </>
    );
}