import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticationService } from '../../Service/auth.service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { loginService } from '../../Service/login.service';


function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        loginService.CreateUser(data)
            .then((res) => console.log(res))
            .catch(err => { console.log(err) })
        // navigate('/login')
    }

    const navigate = useNavigate()
    const signIn = () => {
        // authenticationService.loadCurrentUser()
        navigate('/login')
    }
    return (
        <>
            <Card variant="outlined" sx={{ marginTop: '100px', marginLeft: 'auto', marginRight: 'auto', width: '400px', padding: 5 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" component="h2">CREATE ACCOUNT</Typography>
                    <TextField error={Boolean(errors.username)} helperText={errors.username?.message}  {...register("username", { required: 'Please enter username.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Name" variant="outlined" /><br />
                    <TextField error={Boolean(errors.email)} helperText={errors.email?.message}  {...register("email", { required: 'Please enter email.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Email" variant="outlined" /><br />
                    <TextField error={Boolean(errors.password)} helperText={errors.password?.message}  {...register("password", { required: 'Please enter password.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Password" variant="outlined" /><br />
                    <Button sx={{ margin: 2 }} type='submit' fullWidth variant="contained">SignIn</Button>
                    <span>Already have account<Button onClick={() => navigate('/login')}>login </Button></span>
                </form>
            </Card>

        </>
    )
}

export default SignIn