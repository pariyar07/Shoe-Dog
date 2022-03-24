import React from 'react';
import { Navbar, Footer, VerticalCard, ProductNavbar } from 'fileModules'

export function ProductListing() {
    return (
        <>
            <Navbar />
            <main className="listing-main-section">
                <ProductNavbar/>
                <section className="main-right-section">
                    <div className="listing-card-section">
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

