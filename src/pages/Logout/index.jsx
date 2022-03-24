import React from 'react';
import { Navbar } from "components/Home/Navbar/index"
import { Footer } from "components/Home/Footer/index"

export function Logout() {
    return (
        <>
            <Navbar />
            <section className="log-out-wrapper">
                <h1>You have successfully logged out.</h1>
                <h2>Thanks for visiting <span>Shoe Dog👟</span></h2>
            </section>
            <Footer />
        </>
    );
}
