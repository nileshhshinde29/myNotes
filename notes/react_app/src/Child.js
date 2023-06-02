import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Child(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then(res => setData(res.data)).catch(e => console.log(e))
    }, [url])

    return (
        { data }
    )
}

export default Child