import React from 'react'

function Comp1() {

    console.log('Components1')

    return (
        <div>Comp1</div>
    )
}

export default React.memo(Comp1)