import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticationService } from '../../Service/auth.service'
import './dashboard.scss'
import SecondNavbar from '../Navbar/SecondNavbar'

function Dashboard() {
    const navigate = useNavigate()
    let a = [1, 2, 3, [2, 4]]
    let b = [...a]
    console.log('before', b)
    a[3].push(4)
    console.log('after', b)




    const logout = () => {
        authenticationService.logout()
        navigate('/login')
    }
    return (
        <>
            <SecondNavbar />
            <button className='btn-primary' onClick={() => logout()}>logout</button>
            <div style={{ backgroundColor: 'gray', height: '1500px', overflowY: 'scroll' }}>jdlsad</div>
        </>
    )
}

export default Dashboard