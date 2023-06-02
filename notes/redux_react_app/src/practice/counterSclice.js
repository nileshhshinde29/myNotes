import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//thunk used for async operation
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const todo = axios.get("https://todo-backend-rest.onrender.com/todos")
        .then((res) => { return (res.data) })
        .catch((e) => console.log(e))
    return todo
});



const initialState = {
    value: 0,
    todos: [],
    loading: 'idle',
    error: null,
};

const count = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { increament, decreament } = count.actions

export default count.reducer


