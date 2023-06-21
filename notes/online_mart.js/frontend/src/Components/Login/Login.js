import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticationService } from '../../Service/auth.service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
// import { loginService } from '../../Service/login.service';

function Login() {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        // e.preventDefault()   
        authenticationService.login(data)
            .then(res => navigate('/home'))
            .catch(err => alert("Please provide valid credentials"))
    }

    const login = () => {
        authenticationService.loadCurrentUser()
        navigate('/home')
    }
    return (
        <>
            <Card variant="outlined" sx={{ marginTop: '100px', marginLeft: 'auto', marginRight: 'auto', width: '400px', padding: 5 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" component="h2">LOGIN</Typography>
                    <TextField size='small' error={Boolean(errors.email)} helperText={errors.email?.message}  {...register("email", { required: 'Please enter email' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Email" variant="outlined" /><br />
                    <TextField size='small' error={Boolean(errors.password)} helperText={errors.password?.message}  {...register("password", { required: 'Please enter password' })} sx={{ margin: 2 }} fullWidth id="outlined-basic" label="Password" variant="outlined" /><br />
                    {errors.backendError ? <Typography sx={{ fontSize: '10px', color: 'red' }} >{errors.backendError.message}</Typography> : <></>}
                    <Button sx={{ margin: 2 }} type='submit' fullWidth variant="contained">Login</Button>
                    <span>{"Don't"} have account<Button onClick={() => navigate('/signin')}>Sign in </Button></span>
                </form>
            </Card>

        </>
    )
}

export default Login