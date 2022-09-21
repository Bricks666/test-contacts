import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')`
	display: grid;
	grid-template-columns: 1fr 1fr max-content;
	gap: 10px;

	@media (max-width: 540px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledLegend = styled(Typography)`
	grid-column: span 3;

	@media (max-width: 540px) {
		grid-column: span 1;
		justify-self: center;
	}
`;
