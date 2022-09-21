import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CommonProps } from '@/interfaces/common';
import { StyledButton, StyledForm } from './styles';
import { authThunk, AuthThunkParams } from '@/models/auth';
import useTypedDispatch from '@/hooks/useTypedDispatch';
import { loginScheme } from './scheme';
import { Field } from '../Field';

export interface LoginFormProps extends CommonProps {}

export const LoginForm: React.FC<LoginFormProps> = React.memo(
	function LoginForm(props) {
		const { className } = props;

		const dispatch = useTypedDispatch();
		const navigate = useNavigate();

		const { reset, control, formState, handleSubmit } =
			useForm<AuthThunkParams>({
				defaultValues: {
					login: '',
					password: '',
				},
				resolver: joiResolver(loginScheme),
			});

		const onSubmit = React.useCallback<SubmitHandler<AuthThunkParams>>(
			async (data) => {
				const { payload } = await dispatch(authThunk(data));

				if (payload) {
					navigate('/contacts');
				} else {
					reset();
				}
			},
			[reset]
		);

		const { isDirty, isSubmitting } = formState;
		const disableButton = !isDirty || isSubmitting;

		return (
			<StyledForm onSubmit={handleSubmit(onSubmit)} className={className}>
				<Field name='login' control={control} label='Логин' />
				<Field
					name='password'
					control={control}
					type='password'
					label='Пароль'
				/>
				<StyledButton variant='outlined' type='submit' disabled={disableButton}>
					Войти
				</StyledButton>
			</StyledForm>
		);
	}
);
