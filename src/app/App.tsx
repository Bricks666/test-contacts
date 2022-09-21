import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { AppRoutes } from '@/components/AppRoutes';
import { StyledWrapper } from './styles';
import useTypedDispatch from '@/hooks/useTypedDispatch';
import { authThunk, getIsAuthorizing } from '@/models/auth';
import useTypedSelector from '@/hooks/useTypedSelector';

const App = () => {
	const dispatch = useTypedDispatch();
	const isAuthorizing = useTypedSelector(getIsAuthorizing);

	React.useEffect(() => {
		dispatch(authThunk());
	}, []);

	return (
		<StyledWrapper>
			{isAuthorizing ? <CircularProgress /> : <AppRoutes />}
		</StyledWrapper>
	);
};

export default App;
