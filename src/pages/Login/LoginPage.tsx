import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { StyledContainer, StyledLogin } from './styles';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getIsAuth } from '@/models/auth';

const LoginPage: React.FC = () => {
	const isAuth = useTypedSelector(getIsAuth);
	const navigate = useNavigate();

	React.useLayoutEffect(() => {
		if (isAuth) {
			navigate('/contacts');
			console.log('navigate');
		}
	}, [isAuth]);
	return (
		<StyledContainer>
			<Typography variant='h2' align='center' component='h1'>
				Вход
			</Typography>
			<StyledLogin />
		</StyledContainer>
	);
};

export default LoginPage;
