const orderReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ORDER":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default orderReducer