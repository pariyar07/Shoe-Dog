import React from 'react';

export function HorizontalCard() {
    return (
        <>
            <section className="card-content horizontal-card-container">
                <div className="card">
                    <div className="card-horizontal">
                        <img className="card-img horizontal-img" src='/assets/shoes.png' alt="shoe" />
                        <div className="card-info">
                            <div className="card-title">
                                <div>
                                    <h3>Nike Air Force 1</h3>
                                    <p className="card-description">New Arrivals</p>
                                </div>
                            </div>
                            <div className="price">
                                <p className="current-price">$100</p>
                                <p className="actual-price">$200</p>
                                <p className="discount-percentage">(50% OFF)</p>
                            </div>
                            <div className="card-para">
                                <p>Rewrite history. Redefine the position.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}