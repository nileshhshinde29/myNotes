import React, { forwardRef } from 'react'

function Component1(props, ref) {

    return (
        <div>
            <input ref={ref} />
        </div>
    )
}

export default forwardRef(Component1)