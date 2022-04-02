import React from 'react';
import { Rating } from 'components/Home/common/cart-rating'
import { useProducts } from 'contexts/product-context'

export function ProductNavbar() {
    const { state: {price}, filterState: { byRating, sort, categoryName, searchQuery, byPriceRange }, filterDispatch } = useProducts()
    console.log(byRating, sort, categoryName, searchQuery, byPriceRange)
    return (
        <>
            <aside className="aside-navbar">
                <div className="product-filter">
                    <div>
                        <h1>Filters</h1>
                        <button className="filter-badge" onClick={() => {
                            filterDispatch({
                                type: "CLEAR_FILTER",
                            })
                        }}>Clear All</button>
                    </div>
                    <div className="price-range">
                        <input type="range" className='range-slider' value={price}
                            onChange={(e) => {
                                filterDispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value})
                            }} min="0" max="9000" step="1000" />
                        <ul className="filter-range">
                            <li>From: <span>$0</span></li>
                            <li>To: <span>$10000</span></li>
                        </ul>
                    </div>
                    <div className="sort-container">
                        <h3>Sort By:</h3>
                        <ul className="price-sort">
                            <li>
                                <input type="radio" id="sort-h2l" name="sort-selector" onChange={() => filterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "highToLow"
                                })}
                                    checked={sort === 'highToLow' ? true : false}
                                />
                                <label htmlFor="sort-h2l">Price - High to Low</label>
                            </li>
                            <li>
                                <input type="radio" id="sort-l2h" name="sort-selector" onChange={() => filterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "lowToHigh"
                                })}
                                    checked={sort === 'lowToHigh' ? true : false}
                                />
                                <label htmlFor="sort-l2h">Price - Low to High</label>
                            </li>
                        </ul>
                    </div>
                    <div className="rate-container">
                        <h3>Rating:</h3>
                        <ul className="product-rating">
                            <Rating rating={byRating} onClick={(i) => filterDispatch({
                                type: "FILTER_BY_RATING",
                                payload: i + 1
                            })} />
                        </ul>
                    </div>
                </div>
                <div className="product-categories">
                    <h1>Categories</h1>
                    <div className="product-categories-list">
                        <button onClick={() => filterDispatch({
                            type: "SORT_BY_CATEGORY",
                            payload: "sneakers"
                        })}>Sneaker</button>
                        <button onClick={() => filterDispatch({
                            type: "SORT_BY_CATEGORY",
                            payload: "formal-shoes"
                        })}>Formal Shoes</button>
                        <button onClick={() => filterDispatch({
                            type: "SORT_BY_CATEGORY",
                            payload: "slippers"
                        })}>Slippers</button>
                        <button onClick={() => filterDispatch({
                            type: "SORT_BY_CATEGORY",
                            payload: "cleats"
                        })}>Cleats</button>
                    </div>
                </div>
            </aside>
        </>
    );
}