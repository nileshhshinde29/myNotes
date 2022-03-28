import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Mydata from "./Mydata";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(true);

  
  return (
    <div className="App">
      <Home state={state} setState={ setState}/>
      <Mydata />
    </div>
  );
}

export default App;
