import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counter.slice";

const myFunction = (state) => (next) => (action) => {
    console.log('mii');
    next(action)
}

const store = configureStore({
    reducer: {
        count: counterSlice,
    },

    middleware: (middleware) => middleware().concat(myFunction)
})

export default store;
































// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counter.slice'



// const loggingMiddleware = (store) => (next) => (action) => {
//     // Log the action
//     console.log(store);
//     return next(action); // Pass the action to the next middleware in the chain
// };

// const loggingMiddleware1 = (store) => (next) => (action) => {
//     console.log('Action:', action); // Log the action
//     return next(action); // Pass the action to the next middleware in the chain
// };

// export default configureStore({
//     reducer: {
//         counter: counterReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggingMiddleware, loggingMiddleware1)
// })


