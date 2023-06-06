import React, { useState } from 'react'

function HigherOrderComponent(WrappedComponent) {

    const MyFunction = (props) => {
        const [count, setCount] = useState(0)

        const IncreseCount = () => {
            setCount(count + 1)
        }
        return <WrappedComponent count={count} IncreseCount={IncreseCount} {...props} />

    }

    return MyFunction
}

export default HigherOrderComponent