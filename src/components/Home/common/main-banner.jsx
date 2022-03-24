import React from 'react';

export function Banner() {
    return (
        <>
            <section className="main-container top-section">
                <div className="top-section-info">
                    <h1>Limited Collection</h1>
                    <h1>Big Discount</h1>
                    <h3>Save 10% on your first purchase.</h3>
                    <button>Shop Now</button>
                </div>
                <img className="top-section-image" src="/assets/shoes.png" alt="shoe" />
                <i className="fa fa-angle-left"></i>
                <i className="fa fa-angle-right"></i>
            </section>
        </>
    );
}
