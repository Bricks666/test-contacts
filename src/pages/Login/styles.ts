import { LoginForm } from '@/components/LoginForm';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)`
	display: grid;
	align-items: center;
	justify-items: center;
	row-gap: 30px;

	padding: 10px 0;
`;

export const StyledLoginForm = styled(LoginForm)`
	width: 320px;
`;
