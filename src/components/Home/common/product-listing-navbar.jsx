import React, {useState} from 'react';
import {Rating} from 'components/Home/common/cart-rating'

export function ProductNavbar() {
    const [rate, setRate] = useState(3)
    return (
        <>
            <aside className="aside-navbar">
                    <div className="product-categories">
                        <h1>Categories</h1>
                        <ul className="product-categories-list">
                            <li><a href=".">Sneaker</a></li>
                            <li><a href=".">Formal Shoes</a></li>
                            <li><a href=".">Trainer</a></li>
                            <li><a href=".">Cleats</a></li>
                        </ul>
                    </div>
                    <div className="product-filter">
                        <div>
                            <h1>Filters</h1>
                            <a href="."><span className="filter-badge">Clear All</span></a>
                        </div>
                        <div className="price-range">
                            <input type="range" className='range-slider' min="0" max="10"/>
                            <ul className="filter-range">
                                <li>From: <span>$1</span></li>
                                <li>To: <span>$1000</span></li>
                            </ul>
                        </div>
                        <div className="sort-container">
                            <h3>Sort By:</h3>
                            <ul className="price-sort">
                                <li>
                                    <input type="radio" id="sort-h2l" name="sort-selector" />
                                    <label htmlFor="sort-h2l">Price - High to Low</label>
                                </li>
                                <li>
                                    <input type="radio" id="sort-l2h" name="sort-selector" />
                                    <label htmlFor="sort-l2h">Price - Low to High</label>
                                </li>
                            </ul>
                        </div>
                        <div className="rate-container">
                            <h3>Rating:</h3>
                            <ul className="product-rating">
                                <Rating rating={rate}  onClick={(i) => setRate(i + 1)}/>
                            </ul>
                        </div>
                    </div>
                </aside>
        </>
    );
}