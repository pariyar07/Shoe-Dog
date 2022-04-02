import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import {productReducer} from 'contexts/product-reducer'
import {filterReducer} from 'contexts/filter-reducer'

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
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byRating: 0,
        searchQuery: '',
        categoryName: '',
        byPriceRange: 0
    });

    return (
        <ProductsContext.Provider value={{state, dispatch, filterState, filterDispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProducts = () => useContext(ProductsContext)

export {ProductsProvider, useProducts}