import React from 'react'

function Comp1() {

    console.log(a)

    var a = 0;


    return (
        <div>Comp1</div>
    )
}

export default React.memo(Comp1)