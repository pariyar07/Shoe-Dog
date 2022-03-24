import React from 'react';
import {DealsCard, Banner} from "fileModules"

export function Main() {
    return (
        <main className="main-container">
            <Banner/>
            {/* main feature-section */}
            <section className="main-container featured-section">
                <h1>Featured Categories</h1>
                <div className="feature-section-info">
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Sneakers</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Formal Shoes</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Trainers</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Cleats</span>
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
            {/* Featured Products */}
            <section className="main-container featured-section">
                <h1>Featured Products</h1>
                <div className="feature-section-info">
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike Air Force 1 Low</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike Air Max 270</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike VaporMax</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike Revolution 5</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike VaporMax Flyknit</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Jordan I High OG</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/shoes.png" alt="" />
                        <span className="feature-badge">Nike Air Max 90</span>
                    </li>
                </div>
            </section>
            {/* main card-section */}
            <section className="card-section">
                <h1>Deals of the Day</h1>
                <div className="card-wrapper">
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                    <DealsCard />
                </div>
            </section>
        </main>
    );
}

export default Main;