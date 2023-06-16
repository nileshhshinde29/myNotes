import { lazy } from 'react'
const Login = lazy(() => import('../Components/Login/Login'))
const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'))
const AuthLayout = lazy(() => import('../AuthLayout/AuthLayout'))
const AppLayout = lazy(() => import('../AppLayout/AppLayout'))



export const routes = [
    {
        path: 'login',
        component: Login,
        layout: AuthLayout
    },
    {
        path: '/home',
        component: Dashboard,
        layout: AppLayout
    }]
