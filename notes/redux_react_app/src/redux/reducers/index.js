import { combineReducers } from 'redux'

import { productReducer, productReducerTwo } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: productReducerTwo,
})

export default reducers

