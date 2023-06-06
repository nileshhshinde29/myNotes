import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

function WrappedComp1(props) {
    const { count, IncreseCount, name } = props

    return (
        <>
            <div>{name}</div>
            <h1>{count}</h1>
            <button onClick={() => IncreseCount()}>+++</button>
        </>
    )
}

export default HigherOrderComponent(WrappedComp1)