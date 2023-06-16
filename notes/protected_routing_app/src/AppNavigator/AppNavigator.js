import React, { lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import PageNotFound from '../Components/PageNotFound';
import { routes } from '../Routes/Routes'




export const AppNavigator = () => {

    console.log(routes);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/home'} replace />} />
                {
                    routes?.map((item, index) => (
                        <Route path={item.path} key={index} element={<item.layout component={item.component} />} />
                    ))
                }
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
