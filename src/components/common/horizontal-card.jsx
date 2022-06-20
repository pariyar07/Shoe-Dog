import { useProducts } from 'contexts/product-context'

export function HorizontalCard() {
    const { state: { cart }, dispatch } = useProducts();

    return (
        <>
            {
                cart.map((product) => (
                    <div className="horizontal-card" key={product._id}>
                        <img className="card-img -img" src={product.image} alt="shoe" />
                        <div className="card-info">
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
                            <div className="quantity">
                                <select className="count" value={product.qty} onChange={(e) =>
                                    dispatch({
                                        type: "INCREASE_CART_QTY",
                                        payload: {
                                            _id: product._id,
                                            qty: e.target.value,
                                        },
                                    })
                                }>
                                    {[...Array(5).keys()].map((x) => (
                                        <option key={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="wishlist card-buttons">
                            <button className="wishlist-btn" onClick={() => dispatch({ type: "MOVE_TO_WISHLIST", payload: product })}>Move to Wishlist</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}