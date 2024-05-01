import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "../counter/CounterSlice"
const logger =(state)=> (next)=>(action)=>{
    next(action)
}

export const store =configureStore({
reducer:{
  counter:CounterSlice
},
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)

})


export default store






























// import { configureStore } from '@reduxjs/toolkit'
// import CounterSlice from '../counter/CounterSlice'
// export default configureStore({
//     reducer: {
//         counter: CounterSlice,
//     }
// })