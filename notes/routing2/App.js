import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useReducer,
} from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Routing1 from "./Routing/Routing1";
import Routing2 from "./Routing/Routing2";
import Routing3 from "./Routing/Routing3";
import NestedRouting1 from "./Routing/NestedRouting1";
import NestedRouting2 from "./Routing/NestedRouting2";
import NestedRouting3 from "./Routing/NestedRouting3";


// https://reactrouter.com/docs/en/v6/getting-started/installation
// npm install react-router-dom@6

function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/first" />}></Route>
          <Route path="/first" element={<Routing1 />}>

            <Route path={`:nest1`} element={<NestedRouting1 />}></Route>
            <Route path="nest2" element={<NestedRouting2 />}>

                          <Route path="nest3" element={<NestedRouting3 />}></Route>
            </Route>
          </Route>
          <Route path="/second" element={<Routing2 />}></Route>
          <Route path="/third" element={<Routing3 />}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
