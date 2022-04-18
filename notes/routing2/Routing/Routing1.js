import React, { useState } from 'react'
import { Link,  Outlet, useNavigate } from 'react-router-dom'
import NestedRouting from './NestedRouting1'
import NestedRouting2 from './NestedRouting2'

function Routing1() {
  const [id, setId] = useState(0);
  const Navigate = useNavigate()
  
  return (

   
    <div>
      Routing1
      <div>
        <Link to={"/second"}>To 2nd</Link>
      </div>

      <button onClick={() => { Navigate(`nest${id}`)}}>Navigate</button>
      {/* <Link to={`nest1${id}`}>Nest1</Link> */}
      <Link to="nest2">Nest2</Link>
      <Outlet/>
      
    </div>
  );
}

export default Routing1