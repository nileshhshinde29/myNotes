import React, { useState, useMemo, useCallback } from 'react'
import './App.css'
import Comp1 from './Comp1';

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')


  const myFunction = useCallback(() => {
    console.log('hii')
  }, [name])



  const isEven =
    useMemo(
      () => {
        let i = 0;
        while (i < 900000000) {
          i++;
        }
        return count % 2 === 0 ? 'odd' : 'even'
      }
      , [count]);


  return (
    <div className='App'>
      <h1>{isEven}</h1>
      <Comp1 myFunction={myFunction} />
      <h6>{count}</h6>
      <h6>{name}</h6>
      <button onClick={() => setCount(prev => prev + 1)}>inc</button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default App