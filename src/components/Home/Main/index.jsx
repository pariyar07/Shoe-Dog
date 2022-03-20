import React from 'react';
import "../../../index"
import { HorizontalCard } from "../common/horizontal-card"

export function Main() {
    return (
        <main className="main-container">
            {/* main banner */}
            <section className="main-container top-section">
                <div className="top-section-info">
                    <h1>Limited Collection</h1>
                    <h1>Big Discount</h1>
                    <h3>Save 10% on your first purchase.</h3>
                    <button>Shop Now</button>
                </div>
                <img className="top-section-image" src={require("./shoes.png")} alt="" />
                <i className="fa fa-angle-left"></i>
                <i className="fa fa-angle-right"></i>
            </section>
            {/* main feature-section */}
            <section className="main-container featured-section">
                <h1>Featured Categories</h1>
                <div className="feature-section-info">
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike Air Force 1 Low</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike Air Max 270</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike VaporMax</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike Revolution 5</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike VaporMax Flyknit</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Jordan I High OG</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src={require("./shoes.png")} alt="" />
                        <span className="feature-badge">Nike Air Max 90</span>
                    </li>
                </div>
            </section>
            {/* main card-section */}
            <section className="card-section">
                <h1>Deals of the Day</h1>
                <div className="card-wrapper">
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                </div>
            </section>
        </main>
    );
}

export default Main;