import React, { useEffect, useState } from 'react'

function Skills(props) {
    const { skills } = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1000)
    }, [])
    return (
        <div>
            <h6>Skills</h6>
            <ul>
                {skills?.map((skill, index) => {
                    return <li key={index}>{skill}</li>
                })}
            </ul>

            <div>
                {
                    isLoggedIn
                        ? <><button>Start learning</button></>
                        : <button onClick={() => setIsLoggedIn(true)}>Login</button>
                }

            </div>
        </div>

    )
}

export default Skills