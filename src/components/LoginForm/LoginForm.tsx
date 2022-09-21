import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { TextField } from '@mui/material';
import { StyledButton, StyledForm } from './styles';
import useField from '@/hooks/useField';
import { authThunk } from '@/models/auth';
import useTypedDispatch from '@/hooks/useTypedDispatch';
import { useNavigate } from 'react-router-dom';

export interface LoginFormProps extends CommonProps {}

export const LoginForm: React.FC<LoginFormProps> = React.memo(
	function LoginForm(props) {
		const { className } = props;

		const dispatch = useTypedDispatch();
		const navigate = useNavigate();

		const { reset: resetLogin, ...login } = useField('');
		const { reset: resetPassword, ...password } = useField('');

		const onSubmit = React.useCallback<React.FormEventHandler>(
			async (evt) => {
				evt.preventDefault();
				const { payload } = await dispatch(
					authThunk({ login: login.value, password: password.value })
				);

				if (payload) {
					navigate('/contacts');
				} else {
					resetLogin();
					resetPassword();
				}
			},
			[login.value, password.value]
		);

		const disableButton = !password.value || !login.value;
		return (
			<StyledForm onSubmit={onSubmit} className={className}>
				<TextField label='Логин' variant='outlined' {...login} />
				<TextField
					label='Пароль'
					variant='outlined'
					type='password'
					{...password}
				/>
				<StyledButton variant='outlined' type='submit' disabled={disableButton}>
					Войти
				</StyledButton>
			</StyledForm>
		);
	}
);
