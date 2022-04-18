import React from 'react'
import { useParams } from 'react-router-dom';

function NestedRouting1() {
  const id = useParams();
  console.log(id);
  return <div>NestedRouting{id.nest1}</div>;
}

export default NestedRouting1