import React from 'react';
import { Navigate } from 'react-router-dom';
import { authenticationService } from '../Service/auth.service';

export default function AuthLayout({ component: Component, props, ...rest }) {
    return (
        !authenticationService.currentUserValue ?
            <Component {...rest} />
            :
            <Navigate to="/home" replace />
    );
}
