import React from 'react';
import { useProducts } from 'contexts/product-context'

export function VerticalCard() {
    const { state: { wishlist }, dispatch } = useProducts()

    return (
        <>
            {wishlist.map((product) => (
                <div className="listing-card" key={product._id}>
                    <img className="card-img vertical-card-img" src={product.image} alt="shoe" />
                    <div className="wishlist-card-info">
                        <div className="card-title">
                            <div>
                                <h3>{product.name}</h3>
                                <p className="card-description">{product.info}</p>
                            </div>
                        </div>
                        <div className="price">
                            <p className="current-price">{product.price}</p>
                            <p className="actual-price">{product.actualPrice}</p>
                            <p className="discount-percentage">{product.discount}</p>
                        </div>
                    </div>
                    <div className="bottom-btn cart">
                        <button className="btn default add-cart" onClick={() => {
                            dispatch({ type: "MOVE_TO_CART", payload: product })
                        }}>Move to Cart</button>
                    </div>
                </div>
            ))}
        </>
    );
}
