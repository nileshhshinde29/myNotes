import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../practice/counterSclice'



export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})



