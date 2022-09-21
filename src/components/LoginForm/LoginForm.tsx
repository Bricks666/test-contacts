import * as React from 'react';
import { Control, SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import { StyledField, StyledForm } from './styles';
import { loginThunk, LoginThunkParams } from '@/models/auth';
import useTypedDispatch from '@/hooks/useTypedDispatch';
import { loginScheme } from './scheme';
import { Checkbox } from '../Checkbox';

export interface LoginFormProps extends CommonProps {}

export const LoginForm: React.FC<LoginFormProps> = React.memo(
	function LoginForm(props) {
		const { className } = props;

		const dispatch = useTypedDispatch();

		const { reset, control, formState, handleSubmit } = useForm<LoginThunkParams>({
			defaultValues: {
				login: '',
				password: '',
				rememberMe: false,
			},
			resolver: joiResolver(loginScheme),
		});

		const onSubmit = React.useCallback<SubmitHandler<LoginThunkParams>>(
			async (data) => {
				await dispatch(loginThunk(data));
				reset();
			},
			[reset]
		);

		const { isDirty, isSubmitting } = formState;
		const disableButton = !isDirty || isSubmitting;

		return (
			<StyledForm onSubmit={handleSubmit(onSubmit)} className={className}>
				<StyledField
					name='login'
					control={control as unknown as Control}
					label='Логин'
				/>
				<StyledField
					name='password'
					control={control as unknown as Control}
					type='password'
					label='Пароль'
				/>
				<Checkbox
					name='rememberMe'
					control={control as unknown as Control}
					label='Запомнить меня'
				/>
				<Button variant='outlined' type='submit' disabled={disableButton}>
					Войти
				</Button>
			</StyledForm>
		);
	}
);
