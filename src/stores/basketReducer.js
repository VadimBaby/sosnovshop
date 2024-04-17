const basketReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PRODUCT":

            let list = state.filter(el => el.id == action.payload.id)

            if(list.length > 0) {
                let index = state.findIndex((el) => el.id == action.payload.id)

                let product = state[index]

                return [{
                    ...product,
                    count: product.count + 1,
                }, ...state.filter((el) => el.id != action.payload.id)].toSorted((el1, el2) => el1.date > el2.date)
            } else {
                return [{
                    ...action.payload,
                    count: 1,
                    date: Date()
                }, ...state].toSorted((el1, el2) => el1.date > el2.date)
            }
        case "DELETE_PRODUCT":
            let index = state.findIndex((el) => el.id == action.payload)

            let count = state[index].count

            if (count > 1) {
                let product = state[index]

                return [{
                    ...product,
                    count: product.count - 1
                }, ...state.filter((el) => el.id != action.payload)].toSorted((el1, el2) => el1.date > el2.date)
            } else {
                return state.filter((el) => el.id != action.payload)
            }
        case "RESET_BASKET":
            return []
        default:
            return state
    }
}

export default basketReducer