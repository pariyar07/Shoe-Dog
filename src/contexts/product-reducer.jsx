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
        case 'ADD_TO_CART': {
            return {
                ...state, cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
        }
        case 'MOVE_TO_CART': {
            return {
                ...state, cart: [...state.cart, { ...action.payload }],
                wishlist: state.wishlist.filter((c) => c._id !== action.payload._id)
            }
        }
        case 'INCREASE_CART_QTY': {
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        }
        case 'ADD_TO_WISHLIST': {
            return {
                ...state, wishlist: [...state.wishlist, { ...action.payload }]
            }
        }
        case 'MOVE_TO_WISHLIST': {
            return {
                ...state, wishlist: [...state.wishlist, { ...action.payload }],
                cart: state.cart.filter((c) => c._id !== action.payload._id)
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state, cart: []
            }
        } case 'CLEAR_WISHLIST': {
            return {
                ...state, wishlist: []
            }
        }
        case "CHANGE_QTY": {
            return {
                ...state, cart: state.cart.filter((c) => c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty)
            }
        }
        default: {
            return state;
        }
    }
}