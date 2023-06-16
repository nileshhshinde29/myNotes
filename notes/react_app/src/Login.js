import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticationService } from './auth.service';

function Login() {
    const navigate = useNavigate()
    const login = () => {
        authenticationService.loadCurrentUser()
        localStorage.setItem('user', JSON.stringify('user created'));
        navigate('/home')


    }
    return (
        <>
            <div>Login</div>
            <button onClick={() => login()}>Login</button>

        </>
    )
}

export default Login