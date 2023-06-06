import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, fetchTodos } from './CounterSlice'

function CounterApp() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    console.log(count);
    return (
        <>
            <div>CounterApp {count.count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
    )
}

export default CounterApp