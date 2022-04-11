import React from 'react';
import { Navbar, Footer, ProductNavbar } from 'fileModules'
import { useProducts } from 'contexts/product-context';
import ProductCard from 'components/Home/common/product-listing-card'


export function ProductListing() {
    const { state: { products} } = useProducts();
    return (
        <>
            <Navbar />
            <main className="listing-main-section">
                <ProductNavbar />
                <section className="main-right-section">
                    <div className="listing-card-section">
                        {products.map(({ _id, image, name, info, price, actualPrice, discount }) => 
                            <ProductCard
                                key={_id}
                                name={name}
                                info={info}
                                image={image}
                                price={price}
                                actualPrice={actualPrice}
                                discount={discount}
                            />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

