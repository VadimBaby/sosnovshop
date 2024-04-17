const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload]
        case "CHANGE_NAME":
            let user = state.find(el => el.id == action.payload.id)

            return [...state.filter(el => el.id != action.payload.id), {
                ...user,
                name: action.payload.name
            }]
        case "CHANGE_SURNAME":
            let user2 = state.find(el => el.id == action.payload.id)

            return [...state.filter(el => el.id != action.payload.id), {
                ...user2,
                surname: action.payload.surname
            }]
        default:
            return state
    }
}

export default usersReducer