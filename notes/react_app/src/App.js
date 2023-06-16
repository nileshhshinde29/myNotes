import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Suspense, useEffect, useReducer, useRef, useState } from 'react'
import Component1 from './Component1';
import { AppNavigator } from './AppNavigator';
function App() {





  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <AppNavigator />
      </Suspense>
    </>
  )
}

export default App;
