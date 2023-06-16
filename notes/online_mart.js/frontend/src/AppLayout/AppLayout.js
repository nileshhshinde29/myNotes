import React from 'react';
import { Navigate } from 'react-router-dom';
import { authenticationService } from '../Service/auth.service';

export default function AppLayout({ component: Component, props, ...rest }) {

    return (
        authenticationService.currentUserValue ?
            <Component {...rest} />
            :
            <Navigate to="/login" replace />
    );
}
