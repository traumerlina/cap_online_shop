import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer,productDetailsReducer, searchReducer, filtersReducer} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';




const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    search: searchReducer,
    filters: filtersReducer,
    cart: cartReducer

})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;