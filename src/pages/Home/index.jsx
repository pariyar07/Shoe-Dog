import React from 'react';
import {Navbar} from "components/Home/Navbar/index"
import {Main} from "components/Home/Main/index"
import {Footer} from "components/Home/Footer/index"

export function Home() {
    return ( 
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    );
}