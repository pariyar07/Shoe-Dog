import React from 'react';
import { Navbar, Footer, HorizontalCard, CartNavbar } from 'fileModules';
import { useProducts } from 'contexts/product-context'

export function Cart() {
    const { state: { cart }, dispatch } = useProducts()

    return (
        <>
            <Navbar />
            <main className="cart-main-section">
                <section className="cart-left-section">
                    <div className="cart-header">
                        <h1>Cart</h1>
                        <h3>{cart.length} items in basket</h3>
                    </div>
                    <button onClick={() => {
                        dispatch({ type: "CLEAR_CART", payload: {} })
                    }}
                        className="remove-all">Remove All</button>
                    <div className="cart-card-container">
                        {
                            cart.length > 0 ? (<HorizontalCard />) : (
                                <>
                                    <h1 style={{
                                        margin: "auto",
                                        color: "white",
                                        fontSize: "2.5rem"
                                    }}>Cart is empty 😢</h1>
                                    <img
                                        src="/assets/empty-cart.png"
                                        alt="shoe"
                                        style={{
                                            margin: "auto",
                                            width: "30rem"
                                        }} />
                                </>
                            )
                        }
                    </div>
                </section>
                <CartNavbar />
            </main>
            <Footer />
        </>
    );
}