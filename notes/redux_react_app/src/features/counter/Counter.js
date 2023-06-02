import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './counterSlice'
import { increment, decrement } from './counterSlice'

export function Counter() {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.counter.loading) // don't forget to give state.name. this name from store
    const value = useSelector((state) => state.counter.value)
    const todos = useSelector((state) => state.counter.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            {value}
            <button onClick={() => dispatch(decrement())}>-</button>

            {
                todos?.slice(0, 20).map((item, index) =>
                    <div key={index}>{item.text}</div>
                )
            }

        </>
    )
}