import React from 'react';
import { Navbar } from 'components/Home/Navbar/index'
import { Footer } from 'components/Home/Footer/index'
import {VerticalCard} from 'components/Home/common/vertical-card'
import 'index.css'

export function Wishlist() {
    return (
        <>
            <Navbar />
            <main className="wishlist-main-section" />
            <div className="wishlist-header">
                <h1>Wishlist</h1>
                <p>You have 17 items in your wishlist</p>
            </div>
            <button className="remove-all">Remove All</button>
            <div className="wishlist-cards">
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
            </div>
            <Footer />
        </>
    );
}
