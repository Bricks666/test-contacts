import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')`
	display: grid;
	grid-template-columns: 150px 1fr max-content;
	gap: 10px;

	padding: 10px 5px;
`;

export const StyledLegend = styled(Typography)`
	grid-column: span 3;
`;
