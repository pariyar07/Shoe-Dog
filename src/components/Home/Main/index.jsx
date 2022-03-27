import React from 'react';
import { Banner, MainHorizontalCard, Laceless} from "fileModules"

export function Main() {
    return (
        <main className="main-container">
            <Banner/>
            {/* main feature-section */}
            <section className="main-container featured-section">
                <h1>Featured Categories</h1>
                <div className="feature-section-info">
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Sneakers/Sneaker1.png" alt="Sneaker" />
                        <span className="feature-badge">Sneakers</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/FormalShoes/Formal1.png" alt="Formal Shoe" />
                        <span className="feature-badge">Formal Shoes</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Slippers/Slipper3.png" alt="Slipper" />
                        <span className="feature-badge">Slippers</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Cleats/Cleats5.png" alt="Football Boots" />
                        <span className="feature-badge">Cleats</span>
                    </li>
                </div>
            </section>
            {/* main card-section */}
            <section className="card-section">
                <h1>Deals of the Day</h1>
                <div className="card-wrapper">
                    <MainHorizontalCard />
                    <MainHorizontalCard />
                    <MainHorizontalCard />
                    <MainHorizontalCard />
                </div>
            </section>
            {/* Featured Products */}
            <section className="main-container featured-section">
                <h1>Featured Products</h1>
                <div className="feature-section-info">
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Sneakers/Sneaker4.png" alt="" />
                        <span className="feature-badge">Vans Classic Low</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Slippers/Slipper3.png" alt="" />
                        <span className="feature-badge">Gucci Slipper</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/FormalShoes/Formal3.png" alt="" />
                        <span className="feature-badge">Clarks Black</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Cleats/Cleats1.png" alt="" />
                        <span className="feature-badge">Adidas Boots</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Sneakers/Sneaker3.png" alt="" />
                        <span className="feature-badge">Nike Air Force 1</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Sneakers/Sneaker5.png" alt="" />
                        <span className="feature-badge">Adidas Originals</span>
                    </li>
                    <li className="feature-list">
                        <img className="feature-img" src="/assets/Sneakers/Sneaker4.png" alt="" />
                        <span className="feature-badge">Vans Classic Low</span>
                    </li>
                </div>
            </section>
            {/* main card-section */}
            <section className="card-section">
                <h1>Laceless Sale</h1>
                <div className="card-wrapper">
                    <Laceless />
                    <Laceless />
                    <Laceless />
                    <Laceless />
                </div>
            </section>
        </main>
    );
}

export default Main;