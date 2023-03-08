import { actionType } from "./ActionType"


export const initialState = {
    loading: false,
    products: [],
    error: false,
    card: [],
    wishlist: []
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionType.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionType.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false
            }
        case actionType.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actionType.ADD_TO_CARD:
            return {
                ...state,
                card: action.payload
            }
        default: return state
    }
}
