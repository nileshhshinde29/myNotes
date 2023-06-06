import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    count: 0
}

export const fetchTodos = createAsyncThunk('todos', async () => {
    let data = await axios.get("https://todo-backend-rest.onrender.com/todos").then(e => e.data).catch(e => console.log(e))
    return data;
})

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.value = action.payload
                state.loading = false
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { increment, decrement } = counter.actions

export default counter.reducer