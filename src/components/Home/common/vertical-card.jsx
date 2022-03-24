import React from 'react';

export function VerticalCard() {
    return (
        <>
            <div className="listing-card">
                <img className="card-img" src="/assets/shoes.png" alt="shoe" /> 
                <div className="card-info">
                    <div className="card-title">
                        <div>
                            <h3>Nike Air Force 1</h3>
                            <p className="card-description">A power that Runs you.</p>
                        </div>
                        <i className="fas fa-heart" aria-hidden="true"></i>
                    </div>
                    <div className="price">
                        <p className="current-price">$500</p>
                        <p className="actual-price">$1000</p>
                        <p className="discount-percentage">(50% OFF)</p>
                    </div>
                </div>
                <div className="bottom-btn cart">
                    <button className="btn default add-cart">Add to Cart</button>
                </div>
            </div>
        </>
    );
}
