import React from 'react';
import {Navbar} from "../../components/Home/Navbar/index"
import '../../../src/index.css'

export function SignUp() {
    return (
        <>
        <Navbar/>
            <section className="sign-up-wrapper">
                <div className="sign-up-left">
                    <img className="rotate" src="/assets/shoes.png" alt="shoes" />
                </div>
                <div className="sign-up-right">
                    <div className="sign-in-container">
                        <div className="header">
                            <h2>Sign-Up</h2>
                        </div>
                        <form id="form" className="form">
                            <div className="form-control">
                                <label for="username">Username</label>
                                <input type="text" id="username" placeholder="Username" />
                            </div>
                            <div className="form-control">
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="form-control">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="form-control">
                                <label for="checkpassword">Check Password</label>
                                <input type="password" id="checkpassword" placeholder="Check Password" />
                            </div>
                            <div className="sign-up button-group">
                                <button id="sign-btn">Sign-Up</button>
                                <a href="./sign-in.html"><button id="sign-btn">Sign-In <i className="fas fa-chevron-right"></i></button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}