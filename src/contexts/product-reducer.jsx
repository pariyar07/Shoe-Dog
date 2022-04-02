export const productReducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS": {
            return {
                ...state, ...state, products: action.data
            };
        }
        case "ERROR": {
            return {
                ...state,
                error: action.error,
            };
        }
        case 'ADD_TO_CART':{
            return {
                ...state, cart: [...state.cart, {...action.payload, qty: 1}]
            }
        }
        case 'ADD_TO_WISHLIST':{
            return {
                ...state, wishlist: [...state.wishlist, {...action.payload, qty: 1}]
            }
        }
        case 'REMOVE_FROM_CART':{
            return {
                ...state, cart: state.cart.filter((c) => c._id !== action.payload._id)
            }
        }
        case "CHANGE_QTY": {
            return {
                ...state, cart: state.cart.filter((c) => c._id === action.payload._id ? (c.qty = action.payload.qty): c.qty)
            }
        }
        default: {
            return state;
        }
    }
}