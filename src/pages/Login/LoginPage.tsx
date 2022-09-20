import { Typography } from '@mui/material';
import * as React from 'react';
import { StyledContainer, StyledLogin } from './styles';

const LoginPage: React.FC = () => {
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
