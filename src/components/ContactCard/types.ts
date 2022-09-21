import { MouseEventHandler } from 'react';

export interface MenuOption {
	readonly label: string;
	readonly href?: string;
	readonly onClick?: MouseEventHandler;
}
