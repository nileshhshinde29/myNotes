import React from 'react'
import { forwardRef } from 'react'

function Home(props, ref) {

    return (
        <>
            <input placeholder="In home component" ref={ref} />
        </>
    )
}

export default forwardRef(Home)