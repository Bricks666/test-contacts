import { MouseEventHandler, ComponentType } from 'react';

interface MenuOptionBase {
	readonly label: string;
	readonly Icon?: ComponentType;
}

interface MenuOptionButton extends MenuOptionBase {
	readonly onClick: MouseEventHandler;
	readonly href?: never;
}

interface MenuOptionLink extends MenuOptionBase {
	readonly onClick?: never;
	readonly href: string;
}

export type MenuOption = MenuOptionButton | MenuOptionLink;
