import React, { useEffect, useState } from "react";

export default function Home(props) {
  const [Local, setToLocal] = useState([]);
    const [counter, setCounter] = useState(0);
    
   


    useEffect(() => {
      
        localStorage.getItem("array") &&
        
            setToLocal(JSON.parse(localStorage.getItem("array")));
        
  }, [localStorage.getItem("array")]);

    const SetToLocal = () => {
      
    const data = [...Local, { name: counter + 1 }];
    setCounter(counter + 1);
      localStorage.setItem("array", JSON.stringify(data));
      props.setState(!props.state)
  };

  return (
    <div>
      home
      <button onClick={() => SetToLocal()}>Button</button>
    </div>
  );
}
