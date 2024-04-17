const bonusesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BONUS":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default bonusesReducer