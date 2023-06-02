import { ActionType } from "../constants/action-files";

let initialState = {
    product: []
}

export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, product: payload }
        default: state
    }

}

export const productReducerTwo = (state = {}, { type, payload }) => {
    switch (type) {
        case "":
            return ({ ...initialState })
    }

}