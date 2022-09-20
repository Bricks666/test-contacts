import { ComponentType, lazy } from 'react';
import { Navigate } from 'react-router-dom';

interface Route {
	readonly path: string;
	readonly Component: ComponentType;
	readonly isOnlyAuth: boolean;
}

const LoginPage = lazy(() => import('../pages/Login'));

export const routes: Route[] = [
	{
		path: '/login',
		Component: LoginPage,
		isOnlyAuth: false,
	},
	{
		path: '*',
		Component: () => <Navigate to='/login' />,
		isOnlyAuth: false,
	},
];
