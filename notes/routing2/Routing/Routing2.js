import React from 'react'
import { Link } from 'react-router-dom'

function Routing2() {
  return (
    <div>
      Routing2
      <div>
        <Link to={"/third"}>to 3nd</Link>
      </div>
    </div>
  );
}

export default Routing2