export interface CommonProps {
	className?: string;
}

export type AnyFunction = (...args: unknown[]) => unknown;

export interface CommonPopupProps {
	readonly isOpen: boolean;
}
