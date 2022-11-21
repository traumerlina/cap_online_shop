import { CAP_APP } from "./types";

const initialState = {
    caps: [],
    loading: true,
    error: false,
    cartItems: [],
    orderTotal: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAP_APP:
            return {
                ...state
            };
        default: 
            return state;
    }
}

export default reducer;