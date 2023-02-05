import axios from 'axios';

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

} from '../types/types'

export const getProducts = (page,category) => async (dispatch) => {
    try {

        dispatch({ type: ALL_PRODUCTS_REQUEST })

        
        // let link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        // if (category) {
        //     link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        // }

        const { data } = await axios.get(`https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?&page=${page}&limit=8&sortby=${category}`)

        // _sortBy=${sortBy.type}&_order=${sortBy.order}

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.message
        })
    }
}

export const setSortBy = ({ type, order })=> async (dispatch) => {
    dispatch ({
        type: SET_SORT_BY,
        payload: { type, order },
    })
    
  };

export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const searchProducts = (term) => async (dispatch) => {
    try {

        dispatch({ type: SEARCH_PRODUCTS_REQUEST })

        
        // let link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        // if (category) {
        //     link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        // }

        const { data } = await axios.get(`https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?term=${term}`)

        dispatch({
            type: SEARCH_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SEARCH_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const sliderProducts = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_PRODUCTS_REQUEST })

        
        // let link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        // if (category) {
        //     link = `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        // }

        const { data } = await axios.get(`https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?`)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}