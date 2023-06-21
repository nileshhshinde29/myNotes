import logo from './logo.svg';
import './App.css';
import React, { Suspense, useEffect, useReducer, useRef, useState } from 'react'
import Home from './Home';
function App() {

  const myRef = useRef()
  const focus = () => {
    myRef.current.focus()
  }

  return (
    <>
      <input ref={myRef} />
      <Home ref={myRef} />
      <button onClick={() => focus()} >button</button>
    </>
  )
}

export default App;
