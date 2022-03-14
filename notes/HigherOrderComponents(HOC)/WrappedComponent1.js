import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function WrappedComponent2(props) {

    const  {Increament , count , name} =props
  return (
        <>
                    <h4>{name}</h4>
                 <button onClick={Increament}>{count} B</button>
        </>
    )

}
export default  HigherOrderComponent(WrappedComponent2)

