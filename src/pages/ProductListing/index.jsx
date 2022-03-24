import React from 'react';
import { Navbar } from 'components/Home/Navbar/index'
import { Footer } from 'components/Home/Footer/index'
import {VerticalCard} from 'components/Home/common/vertical-card'
import {ProductNavbar} from 'components/Home/common/product-listing-navbar'
import "index.css"

export function ProductListing() {
    return (
        <>
            <Navbar />
            <main class="listing-main-section">
                <ProductNavbar/>
                <section class="main-right-section">
                    <div class="listing-card-section">
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                        <VerticalCard/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

