import React from 'react';
import { Navbar, Footer, VerticalCard } from 'fileModules'
import {useProducts} from 'contexts/product-context'


export function Wishlist() {
    const {state: {wishlist}, dispatch} = useProducts();

    return (
        <>
            <Navbar />
            <main className="wishlist-main-section" />
            <div className="wishlist-header">
                <h1>Wishlist</h1>
                <p>You have {wishlist.length} items in your wishlist</p>
            </div>
            <button
            onClick={() => {
                        dispatch({ type: "CLEAR_WISHLIST", payload: {} })
                    }} className="wishlist remove-all">Remove All</button>
            <div className="wishlist-cards">
            {
                            wishlist.length > 0 ? (<VerticalCard/>) : (
                                <>
                                <h1 style={{
                                    margin: "auto",
                                    color: "white",
                                    fontSize: "2.5rem",
                                    height: "30vh"}}>Wishlist is empty 😣</h1>
                                </>
                            )
                        }
            </div>
            <Footer />
        </>
    );
}
