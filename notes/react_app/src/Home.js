import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticationService } from './auth.service'

function Home() {
    const navigate = useNavigate()

    const logout = () => {
        authenticationService.logout()
        navigate('/login')
    }
    return (<>
        <div>Home</div>
        <button onClick={() => logout()}>logout</button>
    </>
    )
}

export default Home