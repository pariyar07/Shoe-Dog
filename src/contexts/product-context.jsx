import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import {productReducer} from 'contexts/product-reducer'

const ProductsContext = createContext(null)

const ProductsProvider = ({ children }) => {
    const initialState = {
        products: [],
        cart: [],
        wishlist: [],
        error: null
    }

    const getProducts = () => {
        (async () => {
            try {
                const productData = await axios.get("/api/products");
                dispatch({ type: "SUCCESS", data: productData.data.products });
            } catch (error) {
                console.error(error.message);
            }
        })()
    }

    useEffect(() => {
        getProducts()
    }, []);

    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductsContext.Provider value={{state, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProducts = () => useContext(ProductsContext)

export {ProductsProvider, useProducts}