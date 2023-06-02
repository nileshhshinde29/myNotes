import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament, decreament } from './counterSclice'
import { fetchTodos } from './counterSclice'
function Counter() {
    const object = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])
    return (
        <>
            <button onClick={() => dispatch(increament())}>+</button>
            {object?.value}
            <button onClick={() => dispatch(decreament())}>-</button>
            {object.todos?.slice(0, 20).map((item, index) => <div key={index}>{item.text}</div>)}
            <div>{object?.loading ? 'Loading.....' : ''}</div>
        </>
    )
}

export default Counter