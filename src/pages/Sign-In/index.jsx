
import React from 'react';
import {Navbar} from "components/Home/Navbar/index"
import 'index.css'

export function SignIn() {
    return (
        <>
        <Navbar/>
        <section className="sign-up-wrapper">
        <div className="sign-up-left">
            <img className="rotate" src="/assets/shoes.png" alt="shoe"/>
        </div>
        <div className="sign-up-right">
            <div className="sign-in-container">
                <div className="header">
                    <h2>Sign-In</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="keep-signed">
                        <input type="checkbox"/>
                        <p>Keep me signed in</p>
                    </div>
                    <div className="sign-up button-group">
                        <button id="sign-btn">Sign-In</button>
                        <a href="./sign-up.html"><button id="sign-btn">Sign-Up <i className="fas fa-chevron-right"></i></button></a>
                    </div>
                    <a><p className="forgot-password">Forgot Password?</p></a>
                </form>
            </div>
        </div>
    </section>
        </>
    );
}