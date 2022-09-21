import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Login } from '@/components/Login';

export const StyledContainer = styled(Container)`
	display: grid;
	align-items: center;
	justify-items: center;
	row-gap: 30px;

	padding: 10px 0;
`;

export const StyledLogin = styled(Login)`
	width: 320px;
`;
