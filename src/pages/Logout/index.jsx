import React from 'react';
import { Navbar } from "../../components/Home/Navbar/index"

export function Logout() {
    return (
        <>
            <Navbar />
            <section class="log-out-wrapper">
                <h1>You have successfully logged out.</h1>
                <h2>Thanks for visiting <span>Shoe Dog👟</span></h2>
            </section>
        </>
    );
}
