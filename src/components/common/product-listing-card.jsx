import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {useProducts} from 'contexts/product-context'

function ProductCard({product}) {
    const {dispatch} = useProducts();
    return (
        <>
            <div className="product-listing-card">
                <img className="listing-card-img" src={product.image} alt="shoe" />
                <div className="listing-card-info">
                    <div className="card-title">
                        <div>
                            <h3>{product.name}</h3>
                            <p className="card-description">{product.info}</p>
                        </div>
                    </div>
                    <div className="price">
                        <p className="current-price">${product.price}</p>
                        <p className="actual-price">{product.actualPrice}</p>
                        <p className="discount-percentage">{product.discount}</p>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: "var(--liked-clr)"
                        }}>
                        <AiFillStar/>
                        <span >{product.ratings}/5</span>
                    </div>
                </div>
                <div className="listing bottom-btn cart">
                    <button onClick={() => {
                        dispatch({type: "ADD_TO_CART", payload: product})
                    }} className="btn default add-cart">Add to Cart</button>
                    <button onClick={() => {
                        dispatch({type: "ADD_TO_WISHLIST", payload: product})
                    }} className="btn default add-wishlist">Add to Wishlist</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;