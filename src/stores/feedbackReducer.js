const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_FEEDBACK":
            return [action.payload, ...state].toSorted((el1, el2) => el1.date > el2.date)
        case "REMOVE_FEEDBACK":
            return state.filter((el) => el.id != action.payload).toSorted((el1, el2) => el1.date > el2.date)
        case "EDIT_FEEDBACK":
            return [...state.filter(el => el.id != action.payload.id), action.payload].toSorted((el1, el2) => el1.date > el2.date)
        default:
            return state
    }
}

export default feedbackReducer