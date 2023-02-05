import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS } from "../types/types";


export const resultsReducer = (state = {results: []}, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                results: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                caps: action.payload.results
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }
}

