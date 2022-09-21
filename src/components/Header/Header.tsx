import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import useTypedDispatch from '@/hooks/useTypedDispatch';
import { logoutThunk } from '@/models/auth';
import { StyledButton } from './styles';

export interface HeaderProps extends CommonProps {}

export const Header: React.FC<HeaderProps> = React.memo(function Header(props) {
	const { className } = props;
	const dispatch = useTypedDispatch();

	const onLogout = React.useCallback(() => {
		dispatch(logoutThunk());
	}, []);

	return (
		<AppBar className={className} position='sticky'>
			<Toolbar>
				<StyledButton onClick={onLogout} color='inherit'>
					Выйти
				</StyledButton>
			</Toolbar>
		</AppBar>
	);
});
