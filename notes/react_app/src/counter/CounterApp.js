import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incByNumber,fetchData2} from "./CounterSlice"

function CounterApp() {

    const { value,data,loading }= useSelector(state=> state.counter)
    const dispatch = useDispatch()
    const[incBy, setIncBy]= useState(0)
   
    useEffect(()=>{
        dispatch(fetchData2('hello'))
    },[])
console.log(data )

  return (
<>
<div>Count {value}</div>
<button onClick={()=>dispatch(increment())}>increment</button>
<button onClick={()=>dispatch(decrement())}>Decrement</button>
<input value={incBy} type='number' onChange={(e)=>setIncBy(e.target.value)}/>

<button onClick={()=>dispatch(incByNumber(Number(incBy)))}>Inc BY Payload</button>

</>    
  )
}

export default CounterApp





























// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, fetchTodos } from './CounterSlice'

// function CounterApp() {
//     const dispatch = useDispatch()
//     const count = useSelector(state => state.counter)

//     useEffect(() => {
//         dispatch(fetchTodos())
//     }, [])

//     console.log(count);
//     return (
//         <>
//             <div>CounterApp {count.count}</div>
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             <button onClick={() => dispatch(decrement())}>decrement</button>
//         </>
//     )
// }

// export default CounterApp