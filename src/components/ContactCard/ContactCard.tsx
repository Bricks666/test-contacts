import * as React from 'react';
import { Link } from 'react-router-dom';
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	ListSubheader,
	Menu,
	MenuItem,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import { CommonProps } from '@/interfaces/common';
import { Contact, useDeleteContactMutation } from '@/models/contacts';
import { CONTACT_NAMES } from '@/consts/contacts';
import useToggle from '@/hooks/useToogle';

export interface ContactCardProps extends CommonProps, Contact {}

export const ContactCard: React.FC<ContactCardProps> = React.memo(
	function ContactCard(props) {
		const { className, id, type, value } = props;

		const ref = React.useRef<HTMLButtonElement | null>(null);
		const [trigger] = useDeleteContactMutation();
		const [openMenu, toggleOpenMenu] = useToggle(false);

		const onDelete = React.useCallback(async () => {
			await trigger(id);
		}, [id, trigger]);

		return (
			<ListItem className={className}>
				<ListSubheader component='span'>{value}</ListSubheader>
				<ListItemText>{CONTACT_NAMES[type]}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton onClick={toggleOpenMenu} ref={ref}>
						<ListIcon />
					</IconButton>
					<Menu open={openMenu} onClose={toggleOpenMenu} anchorEl={ref.current}>
						<MenuItem onClick={onDelete}>Delete</MenuItem>
						<MenuItem component={Link} to='?popups'>
							Edit
						</MenuItem>
					</Menu>
				</ListItemSecondaryAction>
			</ListItem>
		);
	}
);
