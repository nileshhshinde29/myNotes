import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React, { useCallback, useState,useMemo, useEffect, useReducer } from 'react';
import Component from './Component';
import Comp from './Comp';
import ClassComp from './ClassComponent';
import ParentComponent from './ParentComponent';

// export const  myContext = React.createContext (); // import above the App and export Inside the curly brakets 
 
        function App() {

          // const [count, setCount] = useState(0)
          // const [count1, setCount1] = useState(0)
          // const [count2 , setCount2]= useState(0)

       

          return (
            <>
              {/* {count}
              <ClassComp />
              <Comp />
              <Home count={count2} />
              <Component count1={count1} />
              <button onClick={() => setCount(count + 1)}> Increment</button>
              <button onClick={() => setCount1(count + 1)}> Increment 1</button>
              <button onClick={() => setCount2(count + 1)}> Increment 2</button> */}

              <ParentComponent />
            </>
          );
        }

export default App;
