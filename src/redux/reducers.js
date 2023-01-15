import { FETCH_CAPS_FAILURE, FETCH_CAPS_REQUEST, FETCH_CAPS_FINALLY, FETCH_CAPS_SUCCESS} from "./types";


const initialState = {
    caps: [],
    loading: true,
    error: false,
};



const reducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case FETCH_CAPS_SUCCESS:
            return {
                ...state,
                error: false,
                caps: action.payload,
            };
        case FETCH_CAPS_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        case FETCH_CAPS_FINALLY:
            return{
                ...state,
                loading: false
            }
        case FETCH_CAPS_REQUEST:
            return{
                ...state,
                loading: true,
                error: false,
            }
        default: 
            return state;
    }
}

export default reducer;