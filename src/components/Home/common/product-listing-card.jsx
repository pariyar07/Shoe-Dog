import React from 'react';

function ProductCard({_id, image, name, info, price, actualPrice}) {
    return (
        <>
            <div className="product-listing-card" key={_id}>
                <img className="listing-card-img" src={image} alt="shoe" />
                <div className="listing-card-info">
                    <div className="card-title">
                        <div>
                            <h3>{name}</h3>
                            <p className="card-description">{info}</p>
                        </div>
                    </div>
                    <div className="price">
                        <p className="current-price">${price}</p>
                        <p className="actual-price">{actualPrice}</p>
                        <p className="discount-percentage">(50% OFF)</p>
                    </div>
                </div>
                <div className="listing bottom-btn cart">
                    <button className="btn default add-cart">Add to Cart</button>
                    <button className="btn default add-wishlist">Add to Wishlist</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;