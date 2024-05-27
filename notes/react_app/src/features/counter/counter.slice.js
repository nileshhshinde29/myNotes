import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        data2: []
    },
    reducers: {

        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        fetchData: (state, { type, payload }) => {
            state.data2 = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AsyncFunc.pending, (state) => {
                state.loading = true
            })
            .addCase(AsyncFunc.fulfilled, (state, { type, payload }) => {
                state.data = payload
                state.loading = false
            })
            .addCase(AsyncFunc.rejected, (state) => {
                state.loading = false
            })
    }
})

export const AsyncFunc = createAsyncThunk('fetchdata', async () => {

    let data = await fetch("https://dummyjson.com/products").then(res => res.json()).then(res => res).catch(err => console.log(err))
    return data
})

export const asyncFunction2 = (state) => async (dispatch) => {
    let data = await fetch("https://dummyjson.com/products").then(res => res.json()).then(res => res).catch(err => console.log(err))
    dispatch(fetchData(data))

}

export const { increment, decrement, fetchData } = counterSlice.actions
export default counterSlice.reducer



































// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0
//     },
//     reducers: {
//         increment: (state) => {
//             state.value += 1
//         },
//         decrement: (state) => {
//             state.value -= 1
//         },
//         incrementByAmount: (state, { type, payload }) => {
//             console.log("sfsf", state.value, payload, type);
//             state.value = state.value + payload
//         }
//     }
// })
// export const asyncInc = (amount) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount))
//     }, 1000)
// }

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer
