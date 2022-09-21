import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { CommonPopupProps, CommonProps } from '@/interfaces/common';

export interface MainPopupProps extends CommonProps, CommonPopupProps {
	readonly title: string;
	readonly onClose: React.MouseEventHandler;
}

export const MainPopup: React.FC<React.PropsWithChildren<MainPopupProps>> = (
	props
) => {
	const { className, isOpen, onClose, title, children } = props;
	return (
		<Dialog className={className} open={isOpen} onClose={onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};
