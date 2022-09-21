import * as React from 'react';
import { Container } from '@mui/material';
import { CommonProps } from '@/interfaces/common';
import { StyledContainer } from './styles';
import { Header } from '@/components/Header';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children } = props;
	return (
		<StyledContainer>
			<Header />
			<Container className={className} component='main'>
				{children}
			</Container>
		</StyledContainer>
	);
};
