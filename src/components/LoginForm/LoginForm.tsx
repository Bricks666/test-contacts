import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { TextField } from '@mui/material';
import { StyledButton, StyledForm } from './styles';

export interface LoginFormProps extends CommonProps {}

export const LoginForm: React.FC<LoginFormProps> = React.memo(
	function LoginForm(props) {
		const { className } = props;
		return (
			<StyledForm className={className}>
				<TextField label='Логин' variant='outlined' />
				<TextField label='Пароль' variant='outlined' />
				<StyledButton variant='outlined'>Войти</StyledButton>
			</StyledForm>
		);
	}
);
