import { styled } from '@mui/material/styles';
import { Field } from '../Field';

export const StyledForm = styled('form')`
	display: grid;
	grid-template-columns: 1fr max-content;
	row-gap: 10px;
`;

export const StyledField = styled(Field)`
	grid-column: span 2;
`;
