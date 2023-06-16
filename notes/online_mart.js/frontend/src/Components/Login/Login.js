import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticationService } from '../../Service/auth.service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        login()
    }

    console.log(errors);

    const login = () => {
        authenticationService.loadCurrentUser()
        navigate('/home')
    }
    return (
        <>
            <Card variant="outlined" sx={{ marginTop: '100px', marginLeft: 'auto', marginRight: 'auto', width: '400px', padding: 5 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" component="h2">LOGIN</Typography>
                    <TextField error={Boolean(errors.username)} helperText={errors.username?.message}  {...register("username", { required: 'Please enter username' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Username" variant="outlined" /><br />
                    <TextField error={Boolean(errors.password)} helperText={errors.password?.message}  {...register("password", { required: 'Please enter password' })} sx={{ margin: 2 }} fullWidth id="outlined-basic" label="Password" variant="outlined" /><br />
                    <Button sx={{ margin: 2 }} type='submit' fullWidth variant="contained">Login</Button>
                    <span>{"Don't"} have account<Button onClick={() => navigate('/signin')}>Sign in </Button></span>
                </form>
            </Card>

        </>
    )
}

export default Login