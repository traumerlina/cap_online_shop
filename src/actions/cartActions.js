import axios from 'axios'
import { ADD_TO_CART, REMOVE_ITEM_CART } from '../types/types'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

