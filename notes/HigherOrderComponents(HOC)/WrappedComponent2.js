import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
function WrappedComponent1(props) {

    const  {Increament , count,name} =props

  return (
            <>
                <h4>{name}</h4>
                <button onMouseOver={Increament} >{count} B</button>
            </>
  
    )

}
export default HigherOrderComponent(WrappedComponent1)