import React from 'react';
import { Navbar, Footer } from "fileModules"

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
