import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	ListSubheader,
	Menu,
	MenuItem,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CommonProps } from '@/interfaces/common';
import { Contact, useDeleteContactMutation } from '@/models/contacts';
import useToggle from '@/hooks/useToogle';
import { MenuOption } from './types';
import { GET_PARAMS } from '@/consts/getParams';
import { POPUPS } from '@/consts/popups';
import prepareLink from '@/utils/prepareLink';

export interface ContactCardProps extends CommonProps, Contact {}

export const ContactCard: React.FC<ContactCardProps> = React.memo(
	function ContactCard(props) {
		const { className, id, name, value: contactValue } = props;

		const ref = React.useRef<HTMLButtonElement | null>(null);
		const [trigger] = useDeleteContactMutation();
		const [openMenu, toggleOpenMenu] = useToggle(false);
		const location = useLocation();

		const contactActions = React.useMemo<MenuOption[]>(
			() => [
				{
					label: 'Изменить',
					href: prepareLink(location, {
						query: {
							[GET_PARAMS.popups]: POPUPS.editContact,
							[GET_PARAMS.contactId]: id.toString(),
						},
						keepOldQuery: true,
					}),
					Icon: EditIcon,
				},
				{
					label: 'Удалить',
					onClick: async () => trigger(id),
					Icon: DeleteIcon,
				},
			],
			[id, trigger, location.pathname, location.search, location.hash]
		);

		return (
			<ListItem className={className}>
				<ListSubheader component='span'>{name}</ListSubheader>
				<ListItemText>{contactValue}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton onClick={toggleOpenMenu} ref={ref}>
						<ListIcon />
					</IconButton>
					<Menu open={openMenu} onClose={toggleOpenMenu} anchorEl={ref.current}>
						{contactActions.map(({ label, Icon, href, onClick }) => (
							<MenuItem
								component={href ? Link : 'li'}
								to={href}
								onClick={onClick}
								key={label}
							>
								{Icon && (
									<ListItemIcon>
										<Icon />
									</ListItemIcon>
								)}
								{label}
							</MenuItem>
						))}
					</Menu>
				</ListItemSecondaryAction>
			</ListItem>
		);
	}
);
