import React, { useEffect } from 'react'
import HOC from './HOC'

function HocWrapped(props) {
    const { name, setName } = props;

    useEffect(() => {
        setTimeout(() => {
            setName("shinde")
        }, 1000)
    }, [])
    console.log(name);
    return (
        <div>HocWrapped : {name}</div>
    )
}

export default HOC(HocWrapped)