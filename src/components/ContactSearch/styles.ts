import { styled } from '@mui/material/styles';

export const StyledForm = styled('form')`
	display: grid;
	grid-template-columns: 1fr max-content;
	gap: 15px;

	@media (max-width: 540px) {
		grid-template-columns: 1fr;
	}
`;
