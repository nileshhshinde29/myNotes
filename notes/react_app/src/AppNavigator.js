import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import AppLayout from './AppLayout';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Home from './Home';
import { authenticationService } from './auth.service'


export const routes = [
    {
        path: 'login',
        component: Login,
        layout: AuthLayout
    },
    {
        path: '/home',
        component: Home,
        layout: AppLayout
    }]

export const AppNavigator = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/home'} replace />} />
                {
                    routes.map((item, index) => (
                        <Route path={item.path} key={index} element={<item.layout component={item.component} />} />
                    ))
                }
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
