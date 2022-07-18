export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_CATEGORY": {
            return {
                ...state,
                    ...state, categoryName: action.payload
            };
        }
        case "SORT_BY_PRICE": {
            return {
                ...state, sort: action.payload
            };
        } case "FILTER_BY_RATING": {
            return {
                ...state, byRating: action.payload
            };
        } case "FILTER_BY_SEARCH": {
            return {
                ...state, searchQuery: action.payload
            };
        } case "FILTER_BY_PRICE_RANGE": {
            return {
                ...state, byPriceRange: action.payload
            };
        } case "CLEAR_FILTER": {
            return {
                byRating: 0,
                searchQuery: '',
                category: false,
                byPriceRange: 0
            };
        }
        default: {
            return state;
        }
    }
}