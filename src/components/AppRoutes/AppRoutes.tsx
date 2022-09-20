import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';

export const AppRoutes: React.FC = React.memo(function AppRoutes() {
	return (
		<React.Suspense>
			<Routes>
				{routes.map(({ Component, path }) => (
					<Route path={path} element={<Component />} key={path} />
				))}
			</Routes>
		</React.Suspense>
	);
});
