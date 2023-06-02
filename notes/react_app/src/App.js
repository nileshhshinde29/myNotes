import logo from './logo.svg';
import React, { useCallback, useState } from 'react'
import './App.css';
import useChild from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState('')

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [name]);
  const { data } = useChild('https://todo-backend-rest.onrender.com/todos')
  console.log('....', data);


  return (
    <div>
      <p>Count: {count}</p>
      <input value={name} onChange={(e) => setname(e.target.value)} />

      <button onClick={() => setCount(prev => prev + 1)}>btn</button>
    </div>
  );
};



export default App;
