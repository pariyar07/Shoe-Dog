import React from 'react';
import { Navbar } from '../../components/Home/Navbar/index'
import { Footer } from '../../components/Home/Footer/index'
import { HorizontalCard } from '../../components/Home/common/horizontal-card'
import { CartNavbar} from "../../components/Home/common/cart-navbar"
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
                <CartNavbar/>
            </main>
            <Footer />
        </>
    );
}