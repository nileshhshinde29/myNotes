import React from 'react';
import { Navigate } from 'react-router-dom';
import { authenticationService } from '../Service/auth.service';
import { Grid } from '@mui/material';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';

export default function AppLayout({ component: Component, props, ...rest }) {

    return (
        authenticationService.currentUserValue ?
            <>
                <Grid container>
                    <Grid item xs={0} sm={2} >
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Navbar />
                        <Component {...rest} />
                    </Grid>
                </Grid>
            </>

            :
            <Navigate to="/login" replace />
    );
}
