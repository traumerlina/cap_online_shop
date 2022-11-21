import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";

const stringMiddleware = () => (next) => (action) => {
    
    if (typeof action === "string") {
        return next ({
            type: action
        });
    }

    return next(action);
};

const logMiddleware = (store) => (next) => (action) => {
    return next(action)
   
}

const store = createStore(reducer, applyMiddleware(stringMiddleware,logMiddleware));

store.dispatch("HELLO")

export default store;