import React from 'react';

export function VerticalCard() {
    return (
        <>
            <div class="listing-card">
                <img class="card-img" src="/assets/shoes.png" alt="shoe" /> 
                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Nike Air Force 1</h3>
                            <p class="card-description">A power that Runs you.</p>
                        </div>
                        <i class="fas fa-heart" aria-hidden="true"></i>
                    </div>
                    <div class="price">
                        <p class="current-price">$500</p>
                        <p class="actual-price">$1000</p>
                        <p class="discount-percentage">(50% OFF)</p>
                    </div>
                </div>
                <div class="bottom-btn cart">
                    <button class="btn default add-cart">Add to Cart</button>
                </div>
            </div>
        </>
    );
}
