import React from 'react';
import { Navigate } from 'react-router-dom';
import { authenticationService } from './auth.service';

export default function AppLayout({ component: Component, props, ...rest }) {
    console.log('hii2');

    return (
        authenticationService.currentUserValue ?
            <Component {...rest} />
            :
            <Navigate to="/login" replace />


    );
}
