import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';
import { AuthRoute } from '../AuthRoute';

export const AppRoutes: React.FC = React.memo(function AppRoutes() {
	return (
		<React.Suspense fallback='Loading...'>
			<Routes>
				{routes.map(({ Component, path, isOnlyAuth }) => (
					<Route
						path={path}
						element={
							isOnlyAuth ? (
								<AuthRoute>
									<Component />
								</AuthRoute>
							) : (
								<Component />
							)
						}
						key={path}
					/>
				))}
			</Routes>
		</React.Suspense>
	);
});
