import React from 'react';

export function Laceless() {
    return (
    <>
        <section className="card-content horizontal-card-container">
                <div className="card">
                    <div className="card-horizontal">
                        <img className="card-img laceless-img" src='/assets/flyEase.png' alt="shoe" />
                        <div className="card-info">
                            <div className="card-title">
                                <div>
                                    <h3>Nike FlyEase</h3>
                                    <p className="card-description">New Arrivals</p>
                                </div>
                            </div>
                            <div className="price">
                                <p className="current-price">$900</p>
                                <p className="actual-price">$1000</p>
                                <p className="discount-percentage">(10% OFF)</p>
                            </div>
                            <div className="card-para">
                                <p>Fly above your fears.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
    );
}
