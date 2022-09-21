import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';
import { AuthRoute } from '../AuthRoute';
import { Popups } from '../Popups';
import { StyledWrapper } from './styles';

export const AppRoutes: React.FC = React.memo(function AppRoutes() {
	return (
		<React.Suspense
			fallback={(
				<StyledWrapper>
					<CircularProgress size={80} />
				</StyledWrapper>
			)}
		>
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
