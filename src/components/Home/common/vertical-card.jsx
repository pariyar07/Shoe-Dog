import React from 'react';
import {useProducts} from 'contexts/product-context'

export function VerticalCard() {
    const {state: {wishlist}, dispatch} = useProducts()
    
    return (
        <>
        {wishlist.map((prod) => (
            <div className="listing-card">
                <img className="card-img vertical-card-img" src={prod.image} alt="shoe" /> 
                <div className="wishlist-card-info">
                    <div className="card-title">
                        <div>
                            <h3>{prod.name}</h3>
                            <p className="card-description">{prod.info}</p>
                        </div>
                    </div>
                    <div className="price">
                        <p className="current-price">{prod.price}</p>
                        <p className="actual-price">{prod.actualPrice}</p>
                        <p className="discount-percentage">{prod.discount}</p>
                    </div>
                </div>
                <div className="bottom-btn cart">
                    <button className="btn default add-cart">Add to Cart</button>
                    <button className="btn default remove-wishlist">Remove</button>
                </div>
            </div>
        ))}
            
        </>
    );
}
