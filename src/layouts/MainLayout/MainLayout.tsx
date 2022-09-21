import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { StyledContainer } from './styles';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children } = props;
	return <StyledContainer className={className}>{children}</StyledContainer>;
};
