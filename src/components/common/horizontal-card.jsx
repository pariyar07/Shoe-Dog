import React from 'react';
import {useProducts} from 'contexts/product-context'


export function HorizontalCard() {
    const {state: {cart}, dispatch} = useProducts()

    return (
        <>
        {
            cart.map((prod) => (
                <div className="card">
                <div className="card-horizontal">
                    <img className="card-img horizontal-img" src={prod.image} alt="shoe" />
                    <div className="card-info">
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
                        <div className="quantity">
                            <button className="minus">-</button>
                            <input className="count" type="number" value={prod.qty} />
                            <button className="add">+</button>
                        </div>
                    </div>
                    <div className="wishlist card-buttons">
                        {/* <button onClick={() => {
                            dispatch({type: "REMOVE_FROM_CART", payload: {prod}})
                        }}
                        className="remove-btn">REMOVE</button> */}
                        <button className="wishlist-btn">Move to Wishlist</button>
                    </div>
                </div>
            </div>
            ))
        }
        </>
    );
}