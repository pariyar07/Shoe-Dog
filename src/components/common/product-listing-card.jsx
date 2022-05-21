import { AiFillStar } from 'react-icons/ai';

import ProductListingButton from 'components/common/productListingButton'

function ProductCard({product}) {
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
                    <ProductListingButton product={product}/>
                </div>
            </div>
        </>
    );
}

export default ProductCard;