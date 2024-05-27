import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, AsyncFunc, asyncFunction2 } from './counter.slice'

function Counter() {

    const { value, data2 } = useSelector(state => state.count)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncFunction2())
    }, [])
    console.log(data2);

    return (
        <>
            <div>{value}</div>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Dec</button>
        </>
    )
}

export default Counter




































// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, incrementByAmount, asyncInc } from './counter.slice'

// function Counter() {
//     const { value } = useSelector(state => state.counter)
//     const dispatch = useDispatch()

//     return (
//         <h1>
//             {value}
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             <button onClick={() => dispatch(decrement())}>Decrement</button>
//             <button onClick={() => dispatch(incrementByAmount(6))}>Inc by amount</button>
//             <button onClick={() => dispatch(asyncInc(6))}>async Inc by amount</button>
//         </h1>
//     )
// }

// export default Counter