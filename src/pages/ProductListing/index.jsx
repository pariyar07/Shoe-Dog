import React from 'react';
import { Navbar, Footer, ProductNavbar } from 'fileModules'
import { useProducts } from 'contexts/product-context';
import ProductCard from 'components/Home/common/product-listing-card'


export function ProductListing() {
    const { state: { products}, filterState: { sort, byRating, searchQuery, categoryName, byPriceRange } } = useProducts();
    
    const transformProducts = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }
        if (categoryName) {
            sortedProducts = sortedProducts.filter((a) =>
                a.categoryName === categoryName
            );
        }
        if (byPriceRange) {
            sortedProducts = sortedProducts.filter((a) =>
                a.price >= byPriceRange
            );
        }
        return sortedProducts;
    };

    return (
        <>
            <Navbar />
            <main className="listing-main-section">
                <ProductNavbar />
                <section className="main-right-section">
                    <div className="listing-card-section">
                        {transformProducts().map(({ _id, image, name, info, price, actualPrice, discount, ratings}) => 
                            <ProductCard
                                key={_id}
                                name={name}
                                info={info}
                                image={image}
                                price={price}
                                actualPrice={actualPrice}
                                discount={discount}
                                ratings={ratings}
                            />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

