import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticationService } from '../../Service/auth.service';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useForm } from "react-hook-form";


function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        navigate('/login')
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
                    <TextField error={Boolean(errors.name)} helperText={errors.name?.message}  {...register("name", { required: 'Please enter name.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Name" variant="outlined" /><br />
                    <TextField error={Boolean(errors.mobileNumber)} helperText={errors.mobileNumber?.message}  {...register("mobileNumber", { required: 'Please enter mobile number.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Mobile Name" variant="outlined" /><br />
                    <TextField error={Boolean(errors.password)} helperText={errors.password?.message}  {...register("password", { required: 'Please enter password.' })} fullWidth sx={{ margin: 2 }} id="outlined-basic" label="Password" variant="outlined" /><br />
                    <TextField error={Boolean(errors.confirmPassword)} helperText={errors.confirmPassword?.message}  {...register("confirmPassword", { required: 'Please confirm password.' })} sx={{ margin: 2 }} fullWidth id="outlined-basic" label="Confirm Password" variant="outlined" /><br />
                    <Button sx={{ margin: 2 }} type='submit' fullWidth variant="contained">SignIn</Button>
                    <span>Already have account<Button onClick={() => navigate('/login')}>login </Button></span>
                </form>
            </Card>

        </>
    )
}

export default SignIn