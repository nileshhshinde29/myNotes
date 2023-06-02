import { ActionType } from "../constants/action-files";
export const setProduct = (product) => {
    return {
        type: ActionType.SET_PRODUCT,
        payload: product,
    }
}