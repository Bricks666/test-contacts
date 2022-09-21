import * as React from 'react';
import { Navigate } from 'react-router-dom';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getIsAuth } from '@/models/auth';

export const AuthRoute: React.FC<React.PropsWithChildren<{}>> = (props) => {
	const { children } = props;
	const isAuth = useTypedSelector(getIsAuth);

	if (!isAuth) {
		return <Navigate to='/login' replace />;
	}

	return <>{children}</>;
};
