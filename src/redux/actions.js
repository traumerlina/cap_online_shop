
const capsRequested = () => {
    return {
        type: "FETCH_CAPS_REQUEST"
    }
}

const capsLoaded = (newCaps) => {
    return {
        type: "FETCH_CAPS_SUCCESS",
        payload: newCaps,
    };
};

const capsError =(error) => {
    return {
        type: "FETCH_CAPS_FAILURE",
        payload: error,
    };
}

const capsFinally =() => {
    return{
        type: "FETCH_CAPS_FINALLY"
    }
}


const fetchCaps = (dispatch, service) => {
    dispatch(capsRequested());
    service()
    .then((data) => dispatch(capsLoaded(data)))
    .catch((err) => dispatch(capsError(err)))
    .finally(() => dispatch(capsFinally()))
}

const fetchCap = (dispatch, service) => {
    dispatch(capsRequested());
    service()
    .then((data) => dispatch(capsLoaded(data)))
    .catch((err) => dispatch(capsError(err)))
    .finally(() => dispatch(capsFinally()))
}

export {fetchCaps, fetchCap};