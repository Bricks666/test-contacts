import { ComponentType } from 'react';
import { POPUPS } from '@/consts/popups';
import { CommonPopupProps } from '@/interfaces/common';
import { EditContactPopup } from '../EditContactPopup';

export const popupsMap: Record<string, ComponentType<CommonPopupProps>> = {
	[POPUPS.editContact]: EditContactPopup,
};
