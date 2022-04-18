import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NestedRouting2() {
  return (
    <div>
      NestedRouting2
      <Link to="/second">Nest3</Link>
      <Outlet />
    </div>
  );
}

export default NestedRouting2