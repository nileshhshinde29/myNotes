import React, { useState } from 'react'

function HOC(Component) {


    const NewFunction = (props) => {
        const [name, setName] = useState('Nilesh')

        return <Component name={name} setName={setName} {...props} />
    }

    return NewFunction;
}

export default HOC