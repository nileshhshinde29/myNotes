import React, { useState } from 'react'

// HigherOrderComponent is perent component  and Wrappedcomponent is child components
// the props from App.js is first comes at the HigherOrderComponent And 
//  then it pass to the Wrapped Components eg. {...props} 

 function HigherOrderComponent(WrappedComponent) {
       
    function MyCounter(props){
        const [count , setCount] = useState(0)
        function Increament(){
            setCount(count+1)
        }
  
    return (
            <>
                <WrappedComponent Increament={Increament}  count={count} {...props}/> 
            </>
    )
    }
    return MyCounter
}
export default HigherOrderComponent
