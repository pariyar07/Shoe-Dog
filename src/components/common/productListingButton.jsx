
import { useProducts } from 'contexts/product-context';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs"
const ProductListingButton = ({ product }) => {
    const { state: { cart, wishlist }, dispatch } = useProducts();
    return (
        <>
            {
                cart.some((p) => p._id === product._id) ?
                    <Link to="/cart" className="btn default add-cart">Go to Cart&nbsp;<BsFillArrowRightCircleFill /></Link> :
                    <button onClick={() => {
                        dispatch({ type: "ADD_TO_CART", payload: product })
                    }} className="btn default add-cart">Add to Cart</button>
            }
            {
                wishlist.some((p) => p._id === product._id) ?
                    <Link to="/wishlist" className="btn default add-cart">Go to Wishlist&nbsp;<BsFillArrowRightCircleFill /></Link> :
                    <button onClick={() => {
                        dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                    }} className="btn default add-wishlist">Add to Wishlist</button>
            }
        </>
    )
}

export default ProductListingButton