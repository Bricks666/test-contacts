import { ComponentType, lazy } from 'react';
import { Navigate } from 'react-router-dom';

interface Route {
	readonly path: string;
	readonly Component: ComponentType;
	readonly isOnlyAuth: boolean;
}

const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const routes: Route[] = [
	{
		path: 'login',
		Component: LoginPage,
		isOnlyAuth: false,
	},
	{
		path: 'contacts',
		Component: ContactsPage,
		isOnlyAuth: true,
	},
	{
		path: '*',
		Component: () => <Navigate to='/login' />,
		isOnlyAuth: false,
	},
];
