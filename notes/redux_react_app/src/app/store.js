// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../practice/counterSclice'



// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })

import { configureStore } from '@reduxjs/toolkit'
import counterSclice from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterSclice
    }
})


