import { lazy } from 'react'
import newa from '../Components/NewComponent.js/new'
const Login = lazy(() => import('../Components/Login/Login'))
const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'))
const AuthLayout = lazy(() => import('../AuthLayout/AuthLayout'))
const AppLayout = lazy(() => import('../AppLayout/AppLayout'))
const SignIn = lazy(() => import('../Components/Login/SignIn'))



export const routes = [
    {
        path: '/login',
        component: Login,
        layout: AuthLayout
    },
    {
        path: '/home',
        component: Dashboard,
        layout: AppLayout
    }, {
        path: '/signin',
        component: SignIn,
        layout: AuthLayout
    },]
