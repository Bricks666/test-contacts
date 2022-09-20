import { Typography } from '@mui/material';
import * as React from 'react';
import { StyledContainer, StyledLoginForm } from './styles';

const LoginPage: React.FC = () => {
	return (
		<StyledContainer>
			<Typography variant='h2' align='center' component='h1'>
				Вход
			</Typography>
			<StyledLoginForm />
		</StyledContainer>
	);
};

export default LoginPage;
