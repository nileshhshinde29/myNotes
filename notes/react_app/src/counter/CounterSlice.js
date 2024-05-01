import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
        data:[]
    },
    reducers:{
        increment: (state)=>{
            state.value =state.value+1
        },
        decrement: (state)=>{
            state.value =state.value-1
        },
        incByNumber:(state,{type, payload})=>{
            state.value= Number(state.value)+payload
        },
        saveValue: (state, {type,payload})=>{
            console.log("ee",payload)
            state.data= payload
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchData.fulfilled,(state,{type,payload})=>{
            state.data=payload
            state.loading=false
        })
        .addCase(fetchData.rejected, (state)=>{
            state.loading=false
        })
    }
})

export const fetchData = createAsyncThunk('todos', async()=>{
        let data = await axios.get("https://todo-backend-rest.onrender.com/todos").then(e => e.data).catch(e => console.log(e))
        return data;

})
export const fetchData2 = (state) => async(dispatch)=>{
    let data = await axios.get("https://todo-backend-rest.onrender.com/todos").then(e => e.data).catch(e => console.log(e))
    dispatch(saveValue(data))

}

export const {increment, decrement,incByNumber,saveValue}= counterSlice.actions
export default counterSlice.reducer




























// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//     count: 0
// }

// export const fetchTodos = createAsyncThunk('todos', async () => {
//     let data = await axios.get("https://todo-backend-rest.onrender.com/todos").then(e => e.data).catch(e => console.log(e))
//     return data;
// })

// export const counter = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.count += 1
//         },
//         decrement: (state) => {
//             state.count -= 1
//         }
//     },

//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTodos.pending, (state) => {
//                 state.loading = true
//             })
//             .addCase(fetchTodos.fulfilled, (state, action) => {
//                 state.value = action.payload
//                 state.loading = false
//             })
//             .addCase(fetchTodos.rejected, (state) => {
//                 state.loading = false
//             })
//     }
// })

// export const { increment, decrement } = counter.actions

// export default counter.reducer