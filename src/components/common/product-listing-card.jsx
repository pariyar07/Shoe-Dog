import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {useProducts} from 'contexts/product-context'

function ProductCard({_id, image, name, info, price, actualPrice, discount, ratings}) {
    const {dispatch} = useProducts();
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
                        <p className="discount-percentage">{discount}</p>
                    </div>
                    <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: "var(--liked-clr)"
                        }}>
                        <AiFillStar/>
                        <span >{ratings}/5</span>
                    </div>
                </div>
                <div className="listing bottom-btn cart">
                    <button onClick={() => {
                        dispatch({type: "ADD_TO_CART", payload: {_id, image, name, info, price, actualPrice, discount}})
                    }} className="btn default add-cart">Add to Cart</button>
                    <button onClick={() => {
                        dispatch({type: "ADD_TO_WISHLIST", payload: {_id, image, name, info, price, actualPrice, discount}})
                    }} className="btn default add-wishlist">Add to Wishlist</button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;