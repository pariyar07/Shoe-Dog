// import React, {useState, useEffect} from 'react';
import { Navbar, Footer, ProductNavbar } from 'fileModules'
// import { products } from 'backend//db/products'
// import axios from 'axios';


export function ProductListing() {
    // const [products, setProducts] = useState('');
    
    // useEffect(() => {
    //     axios.get('/api/products')
    //     .then(response => console.log(response))
    // }, [])
    return (
        <>
            <Navbar />
            <main className="listing-main-section">
                <ProductNavbar />
                <section className="main-right-section">
                    <div className="listing-card-section">
                        {/* {products.map(product => 
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
                                        <p className="discount-percentage">(50% OFF)</p>
                                    </div>
                                </div>
                                <div className="listing bottom-btn cart">
                                    <button className="btn default add-cart">Add to Cart</button>
                                    <button className="btn default add-wishlist">Add to Wishlist</button>
                                </div>
                            </div>
                        )} */}
                    </div> 
                </section>
            </main>
            <Footer />
        </>
    );
}

