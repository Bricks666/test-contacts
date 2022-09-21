import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';
import { AuthRoute } from '../AuthRoute';
import { Popups } from '../Popups';

export const AppRoutes: React.FC = React.memo(function AppRoutes() {
	return (
		<React.Suspense fallback='Loading...'>
			<Routes>
				<Route path='/*' element={<Popups />}>
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
				</Route>
			</Routes>
		</React.Suspense>
	);
});
