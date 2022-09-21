import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import { CommonPopupProps, CommonProps } from '@/interfaces/common';
import useGetParams from '@/hooks/useGetParams';
import { GET_PARAMS } from '@/consts/getParams';
import { useGetContactQuery } from '@/models/contacts';
import { StyledPopup } from './styles';
import { EditContactForm } from '../EditContactForm';

export interface EditContactPopupProps extends CommonProps, CommonPopupProps {}

export const EditContactPopup: React.FC<EditContactPopupProps> = React.memo(
	function EditContactPopup(props) {
		const navigate = useNavigate();
		const contactId = +useGetParams(GET_PARAMS.contactId)!;
		const onClose = React.useCallback(() => navigate(-1), [navigate]);
		const { data, isLoading, isFetching, isError } = useGetContactQuery(contactId);

		const showLoading = isLoading || isFetching;

		let content: React.ReactElement;
		if (isError) {
			content = (
				<Typography>Что то пошло не так, повторите попытку позже</Typography>
			);
		} else if (showLoading) {
			content = <CircularProgress />;
		} else {
			content = <EditContactForm {...data!} afterSubmit={onClose} />;
		}

		return (
			<StyledPopup {...props} onClose={onClose} title='Изменение контакта'>
				{content}
			</StyledPopup>
		);
	}
);
