import {useState, useEffect} from "react"
import {useProducts} from 'contexts/product-context'

export function CartNavbar() {
    const {state: {cart}} = useProducts();
    const [price, setPrice] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setPrice(cart.reduce((acc, curr) => acc + Number(curr.actualPrice), 0));
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])

    return (
        <>
            <aside className="cart-navbar">
                <div className="coupon">
                    <p><i className="fas fa-tag"></i> Apply Coupon</p>
                    <button>Apply</button>
                </div>
                <div className="price-details">
                    <h2>Price Details (5 Items)</h2>
                    <div className="price-details-categories">
                        <li>
                            <p>Price</p>
                            <span>${price}</span>
                        </li>
                        <li>
                            <p>Discount</p>
                            <span>${price - total}</span>
                        </li>
                        <li>
                            <p>Discount %</p>
                            <span>{cart.length === 0 ? ("--") : ("50%")}</span>
                        </li>
                        <li>
                            <p>Coupon Discount</p>
                            <span>0</span>
                        </li>
                        <li>
                            <p>Delivery Charges</p>
                            <span>Free</span>
                        </li>
                    </div>
                </div>
                <div className="total-price">
                    <h3>Total</h3>
                    <h3>${total}</h3>
                </div>
                <button className="buy-btn">Ready to Take Off</button>
            </aside>
        </>
    );
}