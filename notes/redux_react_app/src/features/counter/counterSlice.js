import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    todos: [],
    value: 0,

}

export const fetchTodos = createAsyncThunk('fetchToodos', async () => {
    const todos = await axios.get("https://todo-backend-rest.onrender.com/todos").then(res => { return res.data }).catch(e => console.log(e))
    return todos
})


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.loading = false
            })

    }


})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;