import React from 'react';

export function MainHorizontalCard() {
    return (
        <>
            <div className="card">
                <div className="card-horizontal">
                    <img className="card-img horizontal-img" src="/assets/shoes.png" alt="shoe" />
                    <div className="card-info">
                        <div className="card-title">
                            <div>
                                <h3>Nike Air Force 1</h3>
                                <p className="card-description">A power that Runs you.</p>
                            </div>
                        </div>
                        <div className="price">
                            <p className="current-price">$500</p>
                            <p className="actual-price">$1000</p>
                            <p className="discount-percentage">(50% OFF)</p>
                        </div>
                        <div className="quantity">
                            <button className="minus">-</button>
                            <input className="count" type="number" value="1" />
                            <button className="add">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}