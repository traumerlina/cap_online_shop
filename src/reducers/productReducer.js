import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    SEARCH_PRODUCTS_REQUEST,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAIL,
    SET_SORT_BY,
    CLEAR_ERRORS

} from "../types/types";

export const productsReducer = (state = { products: [ ] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                productsCount: action.payload.productsCount,
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

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
    
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const searchReducer = (state = { word: [ ]}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS_REQUEST:
            return {
                loading: true,
                word: []
            }

        case SEARCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                word: action.payload
                
            }

        case SEARCH_PRODUCTS_FAIL:
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

export const filtersReducer = (state = { sortBy: {
    type: 'price',
    order: 'desc',
  }}, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
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
    