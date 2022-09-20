import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { StylesWrapper } from './styles';
import { LoginForm } from '../LoginForm';
import { Alert, AlertTitle } from '@mui/material';
import useTypedSelector from '@/hooks/useTypedSelector';
import { getAuthError } from '@/models/auth';

export interface LoginProps extends CommonProps {}

export const Login: React.FC<LoginProps> = React.memo(function Login(props) {
	const { className } = props;
	const error = useTypedSelector(getAuthError);
	return (
		<StylesWrapper className={className}>
			{!!error && (
				<Alert severity='error'>
					<AlertTitle>Ошибка входа</AlertTitle>
					{error}
				</Alert>
			)}
			<LoginForm />
		</StylesWrapper>
	);
});
