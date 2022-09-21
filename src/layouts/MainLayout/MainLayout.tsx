import { CommonProps } from '@/interfaces/common';
import { Container } from '@mui/material';
import * as React from 'react';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children } = props;
	return <Container className={className}>{children}</Container>;
};
