import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { CommonPopupProps, CommonProps } from '@/interfaces/common';
import { MainPopup } from '../MainPopup';
import useGetParams from '@/hooks/useGetParams';
import { GET_PARAMS } from '@/consts/getParams';
import { useGetContactQuery } from '@/models/contacts';
import { StyledForm } from './styles';

export interface EditContactPopupProps extends CommonProps, CommonPopupProps {}

export const EditContactPopup: React.FC<EditContactPopupProps> = React.memo(
	function EditContactPopup(props) {
		const navigate = useNavigate();
		const contactId = +useGetParams(GET_PARAMS.contactId)!;
		const onClose = React.useCallback(() => navigate(-1), [navigate]);
		const { data, isLoading, isFetching, isError } =
			useGetContactQuery(contactId);

		const showLoading = isLoading || isFetching || isError;

		return (
			<MainPopup {...props} onClose={onClose} title='Изменение контакта'>
				{showLoading ? (
					<CircularProgress />
				) : (
					<StyledForm {...data!} afterSubmit={onClose} />
				)}
			</MainPopup>
		);
	}
);
